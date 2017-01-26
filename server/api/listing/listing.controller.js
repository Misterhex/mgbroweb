'use strict';

var _ = require('lodash');
var pg = require('pg');
var connString = require('../../config/environment').postgres;
var async = require("async");
var tryFromCacheOrQuery = require('../tryFromCacheOrQuery');
var listingIndex = require("./listing.index");
var listingGenre = require("./listing.genre");
var listingSingle = require("./listing.single");
var listingRandom = require("./listing.random");
var getHostType = require("../getHostType");

if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function(str) {
        return this.indexOf(str) === 0;
    };
}

exports.index = function(req, res) {

    var key = getHostType(req) + "listing:index";

    function curried(callback) {
        return listingIndex(getHostType(req), callback);
    }

    return tryFromCacheOrQuery(key, curried, res, 21600);
};

exports.genre = function(req, res) {

    var host_type = getHostType(req);

    function listingGenreCurried(callback) {
        return listingGenre(host_type, req.params.genre, callback);
    }

    var key = host_type + "listing:genre:" + req.params.genre;

    return tryFromCacheOrQuery(key, listingGenreCurried, res);
}

exports.single = function(req, res) {
    function curried(callback) {
        return listingSingle(req.params.category, callback);
    }

    var key = "listing:single:" + req.params.category;

    return tryFromCacheOrQuery(key, curried, res);
};

exports.random = function(req, res) {
    var host_type = getHostType(req);

    var key = host_type + "listing:random";

    return tryFromCacheOrQuery(key, listingRandom, res);
};

function handleError(res, err) {
    return res.status(500).send(err);
}
