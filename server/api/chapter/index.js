'use strict';

var express = require('express');
var controller = require('./chapter.controller');

var router = express.Router();

router.get('/recent', controller.recent);
router.get('/mostpopular', controller.mostPopular);
router.get('/search', controller.search);
router.post('/single', controller.single);
router.get('/popularupdate', controller.popularUpdate);

module.exports = router;
