'use strict';

var _ = require('lodash');
var config = require('../../config/environment');
var pg = require('pg');
var pgConnString = config.postgres;

// Get list of genres
exports.index = function(req, res) {
    pg.connect(pgConnString, function (err, pgClient, done) {
        if (err) return handleError(res, err);

        var sql =
            "select distinct(name) from db_genre;";
            
        pgClient.query(sql, function (err, result) {
            done();
            if (err) return handleError(res, err);
            
            return res.status(200).json(result.rows);
        });
    });
};

function handleError(res, err) {
  return res.send(500, err);
}