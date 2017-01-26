var _ = require('lodash');
var pg = require('pg');
var connString = require('../../config/environment').postgres;


module.exports = function(callback) {
     
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    pg.connect(connString, function(err, client, done) {
        if (err) return callback(err);

        var sql =
            "select chapter.name as chapter_name, category.name as category_name, genre.name as genre_name, *  from db_category category" +
            " left join db_genre genre on category.id = genre.db_category_id " +
            " join db_chapter chapter on chapter.db_category_id = category.id" +
            " where category.name =" +
            " (select t2.category_name from " +
            " (select category.name category_name, sum(hit.count) total_views" +
            " from db_chapter chapter" +
            " join db_category category on chapter.db_category_id = category.id" +
            " left join db_hit hit on hit.chapter_name = chapter.name" +
            " group by category.name, category.hosted_category_image" +
            " order by total_views desc NULLS LAST" +
            " LIMIT 1 OFFSET $1) as t2);";

        var offset = randomInt(0, 100);

        client.query(sql, [offset], function(err, result) {
            done();

            if (err) return callback(err);

            var cat = result.rows[0];

            if (!cat) return res.status(404);

            cat.genres = _.uniq(result.rows.map(function(x) { return x.genre_name; }));

            cat.chapters = _.uniq(result.rows.map(function(x) {
                return { chapter_name: x.chapter_name, chapter_no: x.chapter_no };
            }), function(x) { return x.chapter_name; });

            cat.chapters = _.sortBy(cat.chapters, function(x) {
                return x.chapter_no;
            }).reverse();

            return callback(null, cat);
        });
    });
}