var config = require('../../config/environment');
var pg = require('pg');
var connString = config.postgres;
var replaceSql = require("./../replaceSql")

module.exports = function (host_type, callback) {

    pg.connect(connString, function (err, pgClient, done) {
        done();
        if (err) return callback(err);
            
        var sql = 
            "select * from" +
            " (select distinct on (chapter_name) * from" +
            " (select view_count, chapter_name, scrapped_time, category_name, hosted_category_image, chapter_no from " +
            " (select category.id category_id, hit.count view_count, chapter.name as chapter_name, scrapped_time, category.name as category_name, hosted_category_image, chapter_no from db_chapter chapter " +
            " join (select category.id, max(scrapped_time) latest_scrapped_time from db_chapter chapter join db_category category on chapter.db_category_id = category.id group by category.id " +
            " ) t2 on chapter.db_category_id = t2.id and chapter.scrapped_time = t2.latest_scrapped_time " +
            " join db_category category on chapter.db_category_id = category.id " +
            " left join {{db_hit}} hit on chapter.name = hit.chapter_name) t1 join " +
            " (select category.id category_id, sum(hit.count) total_views from db_chapter chapter " +
            " join db_category category on chapter.db_category_id = category.id " +
            " left join {{db_hit}} hit on hit.chapter_name = chapter.name " +
            " group by category.id " +
            " order by total_views desc NULLS LAST " +
            " limit 30) t2 " +
            " on t1.category_id = t2.category_id) t3) as t4" +
            " order by scrapped_time desc NULLS LAST;";
        
        sql = replaceSql(sql, host_type);
        
        pgClient.query(sql, function (err, result) {
            done();
            if (err) return callback(err);
            return callback(null, result.rows);
        });
    });
}
