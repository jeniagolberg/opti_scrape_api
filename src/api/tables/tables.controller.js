
const express = require('express')
const router = express.Router();

router.use("/table", function(req, res, next){
    res.send('tables');
});
    
  
  module.exports = router;