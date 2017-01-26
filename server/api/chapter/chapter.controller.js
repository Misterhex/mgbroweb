'use strict';

var _ = require('lodash');
var Chapter = require('./chapter.model');
var async = require("async");
var config = require('../../config/environment');
var removeAdult = require('./removeAdult');
var recent = require('./chapter.recent');
var mostPopular = require('./chapter.mostPopular');
var single = require('./chapter.single');
var search = require('./chapter.search');
var popularUpdate = require('./chapter.popularUpdate');
var incrementHit = require('./incrementHit');
var queryLastChapterNo = require('./chapter.queryLastChapterNo');
var tryFromCacheOrQuery = require('../tryFromCacheOrQuery');
var getHostType = require('../getHostType');

exports.single = function (req, res) {
    if (!req.body.category || !req.body.chapterNo) {
        return res.status(500);
    }
    
    var key = "single:" + req.body.category + ":" + req.body.chapterNo;
    
    var singleImpl = function(callback) {
        return single(req.body.category, req.body.chapterNo, callback);
    }
    
    tryFromCacheOrQuery(key, singleImpl, res);
    
    var host_type = getHostType(req);
    incrementHit(req.body.category + " " + req.body.chapterNo, host_type);
    return;
};

exports.popularUpdate = function (req, res) {
    var host_type = getHostType(req);
    
      var popularUpdateImpl = function(callback){
        return popularUpdate(host_type, callback);
    }

    return tryFromCacheOrQuery(host_type + "popularUpdate", popularUpdateImpl, res);
};

exports.recent = function (req, res) {
    var host_type = getHostType(req);
    
    var recentImpl = function(callback){
        return recent(host_type, callback);
    }
    
    return tryFromCacheOrQuery(host_type + "recent", recentImpl, res);
};

exports.mostPopular = function (req, res) {
    var host_type = getHostType(req);
    
     var mostPopularImpl = function(callback){
        return mostPopular(host_type, callback);
    }

    return tryFromCacheOrQuery(host_type + "mostPopular", mostPopularImpl, res);
};

exports.search = function (req, res) {
    if (!req.query.keyword) {
        req.status(400).send("keyword not found");
    }
    var keyword = req.query.keyword;

    search(keyword, function (err, results) {
        if (err) { return handleError(res, err); }
        res.status(200).json(results);
    });
}

function handleError(res, err) {
    return res.send(500, err);
}
