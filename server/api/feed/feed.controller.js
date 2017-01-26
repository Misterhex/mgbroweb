'use strict';

var recent = require('./feed.recent.js');
var popularUpdate = require('./feed.popularUpdate.js');
var tryFromCacheOrQuery = require('../tryFromCacheOrQuery');
var getHostType = require('../getHostType')

// Get list of feeds
exports.latest = function(req, res) {
    var host_type = getHostType(req);
    var key = host_type + "feed:recent";

    var recentImpl = function(callback) {
        return recent(host_type, callback);
    }

    return tryFromCacheOrQuery(key, recentImpl, res);
};

exports.popular = function(req, res) {
    var host_type = getHostType(req);
    var key = host_type + "feed:popularUpdate";

    var popularUpdateImpl = function(callback) {
        return popularUpdate(host_type, callback);
    }

    return tryFromCacheOrQuery(key, popularUpdateImpl, res);
};

function handleError(res, err) {
    return res.send(500, err);
}