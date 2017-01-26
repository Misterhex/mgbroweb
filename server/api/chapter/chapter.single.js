'use strict';

var _ = require('lodash');
var async = require("async");
var config = require('../../config/environment');
var pg = require('pg');
var pgConnString = config.postgres;
var queryLastChapterNo = require('./chapter.queryLastChapterNo');

function single (category, chapterNo, callback) {

    pg.connect(pgConnString, function (err, pgClient, done) {
        if (err) return callback(err);

        var sql =
            "select chapter.chapter_no chapter_no, chapter.total_pages total_pages, scrapped_time," +
            " chapter.name chapter_name, category.name category_name, * " +
            " from db_chapter chapter" +
            " join db_category category on chapter.db_category_id = category.id" +
            " join db_page page on chapter.id = page.db_chapter_id" +
            " where chapter.chapter_no = $1" +
            " and category.name = $2" +
            " order by page.page_no;";

        pgClient.query(sql, [chapterNo, category], function (err, result) {
            done();

            if (err) return callback(err);
            
            if (result.rows.length === 0)
                return callback(null, {});

            var x = result.rows[0];
            
            var chapter = {
                chapterNo: x.chapter_no,
                totalPages: x.total_pages,
                scrappedUnixTime: x.scrapped_time,
                pages: result.rows.map(function(x) {
                    return {
                        mangaSrc: x.hosted_manga_src,
                        pageNo: x.page_no,
                    }
                }),
                chapter: {
                    name: x.chapter_name,
                },
                category: {
                    name: x.category_name,
                }
            };

            return callback(null, chapter);
        });
    });
};

function all (category, chapterNo, finalCallback) {
    async.parallel([
        function (callback) {
            single(category, chapterNo, function (err, result) {
                if (err) return callback(err);

                return callback(null, result);
            })
        },
        function (callback) {
            queryLastChapterNo(category, function (err, result) {
                if (err) return callback(err);

                return callback(null, result);
            })
        }
    ],
    function (err, results) {
        if (err) return finalCallback(err);

        var chapter = results[0];
        var lastChapterNo = results[1];

        chapter.lastChapterNo = lastChapterNo;
        finalCallback(null, chapter);
    });
}

module.exports = all;