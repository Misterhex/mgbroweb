'use strict';

var _ = require('lodash');
var async = require("async");
var config = require('../../config/environment');
var pg = require('pg');
var pgConnString = config.postgres;
var replaceSql = require("./../replaceSql")

module.exports = function (host_type, callback) {

    pg.connect(pgConnString, function (err, pgClient, done) {
        if (err) return callback(err);

        var sql =
            "select hit.count view_count, chapter.name as chapter_name, scrapped_time, category.name as category_name, hosted_category_image, chapter_no from db_chapter chapter" +
            " join (select category.id, max(scrapped_time) latest_scrapped_time from db_chapter chapter join db_category category on chapter.db_category_id = category.id group by category.id" +
            " ) t2 on chapter.db_category_id = t2.id and chapter.scrapped_time = t2.latest_scrapped_time" +
            " join db_category category on chapter.db_category_id = category.id" +
            " left join {{db_hit}} hit on chapter.name = hit.chapter_name" +
            " order by scrapped_time desc limit 30;"
            
        sql = replaceSql(sql, host_type);

        pgClient.query(sql, function (err, result) {
            done();
            if (err) return callback(err);
            return callback(null, result.rows);
        });
        
    });
};


