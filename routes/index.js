var express = require('express');
var router = express.Router();

var platform = ["Linux", "Windows", "Unix/MacOS"];

console.log("Your platform is either: ", platform[1], platform[2], platform[3]);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: platform[0] });
});

console.log("You're running on: ", process.platform);

module.exports = router;
