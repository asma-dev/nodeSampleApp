/**
 * TopPage
 *
 * @package Controller
 * @author asma
 * @copyright 2015 asma All Rights Reserved.
 */

var express = require('express');
var router  = express.Router();

router.get('/', function (req, res, next) {
  res.render('top/index', {});
});

module.exports = router;
