var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    currentPage: 'index',
    title: 'Express' });
});

router.get('/rules', (req, res) => {
  res.render('rules', { currentPage: 'rules' });
});

router.get('/john-conway', (req, res) => {
  res.render('john-conway', { currentPage: 'john-conway' });
});

router.get('/snippet', (req, res) => {
  res.render('snippet', { currentPage: 'snippet' });
});

router.get('/resources', (req, res) => {
  res.render('resources', { currentPage: 'resources' });
});

module.exports = router;
