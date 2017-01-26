var redis = require('redis');
var config = require('../../config/environment');
var _ = require('lodash');
var async = require('async');
var pg = require('pg');
var connString = config.postgres;
var replaceSql = require('./../replaceSql');

module.exports = function (host_type, callback) {

    pg.connect(connString, function (err, pgClient, done) {
        done();
        if (err) return callback(err);

        var sql =
            "select hit.count view_count, chapter.name as chapter_name, scrapped_time, category.name as category_name, hosted_category_image, chapter_no" +
            " from db_chapter chapter" +
            " join db_category category on chapter.db_category_id = category.id" +
            " left join {{db_hit}} hit on hit.chapter_name = chapter.name" +
            " order by hit.count desc NULLS LAST" +
            " limit 30;";
            
        sql = replaceSql(sql, host_type);
        
        pgClient.query(sql, function (err, result) {
            done();

            if (err) return callback(err);
            return callback(null, result.rows);
        });
    });
}
