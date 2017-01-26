var _ = require('lodash');
var config = require('../../config/environment');
var pg = require('pg');
var pgConnString = config.postgres;
var replaceSql = require('./../replaceSql');

module.exports = function (chapterName, host_type, callback) {

    pg.connect(pgConnString, function (err, pgClient, done) {

        if (err) return done();

        var sql =
            "UPDATE {{db_hit}} SET count= count + 1 WHERE chapter_name = $1;";
            
        pgClient.query(replaceSql(sql,host_type), [chapterName], function (err) {

            sql =
            "INSERT INTO {{db_hit}} (chapter_name, count)" +
            " SELECT $1, 1" +
            " WHERE NOT EXISTS (SELECT 1 FROM {{db_hit}} WHERE chapter_name = $2);";

            pgClient.query(replaceSql(sql,host_type), [chapterName, chapterName], function (err) {
                return done();
            });

        });
    });
}