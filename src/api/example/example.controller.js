
const express = require('express');
const googleAuth = require('../../auth/google.auth/google.auth');
const router = express.Router();
const getSheetList = require('./../../sheets/sheets')
const {request} = require('gaxios');

router.use("/example", googleAuth, async function(req, res, next){
  const auth = req.token
  const sheetId = require('./config').sheetId
    try {
      let data = await getSheetList(auth ,sheetId);
      const response = await request({
        url: 'http://localhost:3001/scrape',
        headers:{
          start_urls: data.values,
          crawl_depth: 1
        },
      });

      res.send(response);
    } catch (err) {
      console.error(err)
    }

});
    
  
  module.exports = router;