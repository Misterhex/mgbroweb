var config = require('../../config/environment');
var _ = require('lodash');
var async = require('async');
var pg = require('pg');
var connString = config.postgres;

module.exports = function (category, callback) {
    if (!category) {
        callback(new Error("category not valid"));
    }
        
    pg.connect(connString, function (err, pgClient, done) {
        done();
        if (err) return callback(err);

        var sql =
            "select chapter.chapter_no latest_chapter_no from db_chapter chapter " +
            " join db_category category on chapter.db_category_id = category.id" +
            " where category.name = $1" +
            " order by chapter.chapter_no desc" +
            " limit 1";

        pgClient.query(sql, [category], function (err, result) {
            done();
            if (err) return callback(err);
            
            if (!result.rows[0])
                return callback(new Error("category not found"));
                
            return callback(null, result.rows[0].latest_chapter_no);
        });
    });
}
