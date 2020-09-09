/*
 * Global Variables
 */

// Form URL
var formURL = 'https://docs.google.com/forms/d/1LyEGJQqs7eJEvjNklXDa3MYatpjtooPFq3xsxGP6Lso/viewform';
// Sheet name used as destination of the form responses
var sheetName = 'Form Responses 1';
/*
 * Name of the column to be used to hold the response edit URLs 
 * It should match exactly the header of the related column, 
 * otherwise it will do nothing.
 */
var columnName = 'Edit Url';
// Responses starting row
var startRow = 2;

function getEditResponseUrls(){
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  //ScriptApp.newTrigger('onFormSubmit').forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onFormSubmit().create();
  
  var form = FormApp.openByUrl(formURL);
/*  ScriptApp.newTrigger('onFormSubmit1')
    .forForm(form)
    .onFormSubmit()
    .create();*/
  
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues(); 
  var columnIndex = headers[0].indexOf(columnName);
  var data = sheet.getDataRange().getValues();
  for(var i = startRow-1; i < data.length; i++) {
    if(data[i][0] != '' && data[i][columnIndex] == '') {
      var timestamp = data[i][0];
      var formSubmitted = form.getResponses(timestamp);
      if(formSubmitted.length < 1) continue;
      var editResponseUrl = formSubmitted[0].getEditResponseUrl();
      var shorternedUrl = form.shortenFormUrl(editResponseUrl)
      sheet.getRange(i+1, columnIndex+1).setValue(shorternedUrl);
    }
  }
}

// [START apps_script_triggers_onedit]
/**
 * The event handler triggered when editing the spreadsheet.
 * @param {Event} e The onEdit event.
 */
/*
function onEdit(e) {
  // Set a comment on the edited cell to indicate when it was changed.
  var range = e.range;
  range.setNote('Last modified: ' + new Date());
}*/
// [END apps_script_triggers_onedit]


function onFormSubmit(e) {
  var sheet = SpreadsheetApp.getActive().getSheetByName(sheetName); //SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues(); 
  var columnIndex = headers[0].indexOf(columnName);
  var range = e.range;
  var rowNumber = range.getRow();
  var form = FormApp.openByUrl(formURL);
  
  var timestamp = range.getValues()[0][0]; //new Date(e.namedValues['Timestamp'][0]);
  var formSubmitted = form.getResponses(timestamp);

  // Get the Form response URL and add it to the Google Spreadsheet
  var editResponseUrl = formSubmitted[0].getEditResponseUrl();
  var shorternedUrl = form.shortenFormUrl(editResponseUrl)
  sheet.getRange(rowNumber, columnIndex + 1).setValue(shorternedUrl)
}