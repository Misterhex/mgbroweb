var pg = require('pg');
var connString = require('../../config/environment').postgres;
var replaceSql = require('./../replaceSql');

module.exports = function (host_type, callback) {

    pg.connect(connString, function (err, client, done) {
        if (err) {
            return callback(err);
        }

        var sql =
            "select category.hosted_category_image hosted_category_image, category.name as category_name, sum(hit.count) total_views, count(chapter) chapter_count from db_chapter chapter " +
            " join db_category category on chapter.db_category_id = category.id" +
            " left join {{db_hit}} hit on hit.chapter_name = chapter.name" +
            " group by category.name, category.hosted_category_image" +
            " order by total_views desc NULLS LAST;";
        
        sql = replaceSql(sql, host_type);
            
        client.query(sql, function (err, result) {
            done();
            if (err) return callback(err);
            
            console.log("queried from postgres");
            
            return callback(null, result.rows);
        });
    });
};