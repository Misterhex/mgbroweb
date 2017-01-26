var _ = require('lodash');
var pg = require('pg');
var connString = require('../../config/environment').postgres;
var async = require("async");

module.exports = function (category, finalCallback) {
    async.waterfall([
        function (callback) {
            pg.connect(connString, function (err, client, done) {
                if (err) return callback(err);

                var sql =
                    "select chapter.name as chapter_name, category.name as category_name, * from db_category category" +
                    " join db_chapter chapter on chapter.db_category_id = category.id " +
                    " where category.name = $1" +
                    " order by chapter.chapter_no DESC";

                client.query(sql, [category], function (err, result) {
                    done();

                    if (err) return callback(err);

                    var cat = result.rows[0];

                    if (!cat) return callback(new Error("no result found"));

                    cat.categoryId = cat["db_category_id"];

                    cat.chapters = _.uniq(result.rows.map(function (x) {
                        return { chapter_name: x.chapter_name, chapter_no: x.chapter_no };
                    }), function (x) { return x.chapter_name; });

                    cat.chapters = cat.chapters;

                    callback(null, cat);
                });
            });
        },
        function (cat, callback) {

            pg.connect(connString, function (err, client, done) {
                if (err) return callback(err);

                var dbCategoryId = cat.categoryId;

                var sql = "select name from db_genre where db_category_id = $1";

                client.query(sql, [dbCategoryId], function (err, result) {
                    done();

                    if (err) return callback(err);

                    if (!cat) return callback(new Error("no result found"));

                    cat.genres = _.map(result.rows, function (g) {
                        return g.name;
                    });;

                    callback(null, cat);
                });
            });
        }
    ], function (err, cat) {

        if (err) return finalCallback(err);

        return finalCallback(null, cat);
    });
}
