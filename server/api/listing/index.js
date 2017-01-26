'use strict';

var express = require('express');
var controller = require('./listing.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/genre/:genre', controller.genre);
router.get('/single/:category', controller.single);
router.get('/random', controller.random);

module.exports = router;
