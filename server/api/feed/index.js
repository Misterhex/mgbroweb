'use strict';

var express = require('express');
var controller = require('./feed.controller');

var router = express.Router();

router.get('/latest', controller.latest);
router.get('/popular', controller.popular);

module.exports = router;