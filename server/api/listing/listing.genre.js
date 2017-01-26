var pg = require('pg');
var connString = require('../../config/environment').postgres;
var replaceSql = require('./../replaceSql');

module.exports = function(host_type, genre, callback){
    
    pg.connect(connString, function (err, client, done) {
        if (err) {
            return callback(err);
        }

        var sql =
            "select genre.name genre_name, category.hosted_category_image hosted_category_image, category.name as category_name, sum(hit.count) total_views, count(chapter) chapter_count from db_chapter chapter" +
            " join db_category category on chapter.db_category_id = category.id" +
            " join db_genre genre on category.id = genre.db_category_id" +
            " left join {{db_hit}} hit on hit.chapter_name = chapter.name" +
            " group by category.name, category.hosted_category_image, genre.name" +
            " having genre.name = $1" +
            " order by total_views desc NULLS LAST;";
            
        sql = replaceSql(sql, host_type);

        client.query(sql, [genre], function (err, result) {
            done();
            if (err) return callback(err);
            return callback(null, result.rows);
        });
    });
    
}