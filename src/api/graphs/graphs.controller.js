
const express = require('express')
const router = express.Router();

router.use("/graphs", function(req, res, next){
    res.send('graphs');
});
    
  
  module.exports = router;