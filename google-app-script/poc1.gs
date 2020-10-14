function doPost(e) {
  var params = JSON.stringify(e.parameter["name"]);
  var output = HtmlService.createHtmlOutput("New entry stored to <a target='_top _blank' href='https://docs.google.com/spreadsheets/d/1qB25hSYegK3PhgQ6258lD7FyPfaVEVQFXlRy599uB_8/edit?usp=sharing'>google sheet</a>");
  var ss = SpreadsheetApp.openById('1qB25hSYegK3PhgQ6258lD7FyPfaVEVQFXlRy599uB_8');
  var sheet = ss.getSheets()[0];
  sheet.appendRow([e.parameter["name"], e.parameter["admyr"], e.parameter["admclass"], e.parameter["passoutyr"], e.parameter["passoutclass"], e.parameter["profession"]]);
  return output;
}