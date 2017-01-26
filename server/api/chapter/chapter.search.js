'use strict';

var _ = require('lodash');
var config = require('../../config/environment');
var removeAdult = require('./removeAdult');
var pg = require('pg');
var pgConnString = config.postgres;

module.exports = function (keyword, callback) {
    if (!keyword) return callback(new Error("keyword not found"));
    
    pg.connect(pgConnString, function (err, pgClient, done) {
        if (err) return callback(err);

        var sql =
            "select category.name, category.hosted_category_image hosted_category_image from db_category category" +
            " join db_chapter chapter on category.id = chapter.db_category_id" +
            " where LOWER(category.name) like $1 " +
            " group by category.name, category.hosted_category_image" +
            " order by category.name limit 10;";
            
        pgClient.query(sql, [keyword.toLowerCase() + "%"], function (err, result) {
            done();

            if (err) return callback(err);
            
            var data = result.rows.map(function(x) {
                return {
                    "_id": {
                        "name": x.name,
                        "image": x.hosted_category_image
                    }
                }
            });
            
            return callback(null, data);
        });
    });
};


