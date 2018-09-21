var express = require('express');
var router = express.Router();
const tweetcontroller = require('../controllers/tweetcontroller');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', tweetcontroller.homepage);
router.get('/tweets', tweetcontroller.tweets);
router.get('/followers',tweetcontroller.followers);
router.get('/:name', tweetcontroller.profilePage);


module.exports = router;
