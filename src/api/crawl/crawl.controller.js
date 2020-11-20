
const express = require('express')
const router = express.Router();

router.use("/crawl", function(req, res, next){
    res.send('crawl');
});
    
  
  module.exports = router;