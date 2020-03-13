var fs = require('fs');

console.log("Start of SAPUI5 integration test modul... ok");

var xmlPath = "./webapp/view/Home.view.xml";
var xmlContent = fs.readFileSync(xmlPath,"utf8");

console.log(xmlContent);