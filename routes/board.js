var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let query = req.query
  rows=query.rows
  cols=query.cols
  console.log(`rows ${rows}`)
  console.log(`cols ${cols}`)
  res.render('board', { title: 'Board Display', query: query});
});

module.exports = router;
