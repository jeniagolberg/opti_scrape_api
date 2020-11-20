
const {google} = require('googleapis');
var path = require("path");

async function getSheetList(auth, sheetId) {

    try{
    const sheets = google.sheets({version: 'v4', auth});

    const res = (await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: 'A1:A30'
    })).data;

    return res;
    
    } catch (err){
        console.error(`Error while getting from sheets API, error : 
                        ${err}`)
    }
}

module.exports = getSheetList;