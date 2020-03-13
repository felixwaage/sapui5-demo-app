var fs = require('fs');
var request = require('request');

console.log("Start of SAPUI5 integration test modul... ok");

var xmlPath = "./Integration/manifest.json";
var xmlContent = fs.readFileSync(xmlPath,"utf8");

//=========================================================================

var dataSources = getDataSourcesFromManifest(xmlContent);
checkODataService(dataSources);

function callODataService(url) {
    request( url , { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        if (body.status === 200) { return body; }
    });
}

function checkODataService(dataSources) {
    var dataSourcesElements = Object.values(dataSources);
    var dataSourcesElementsNames = Object.keys(dataSources);

    var results = [];

    for(var i = 0; i < dataSourcesElements.length; i++) {
        var element = dataSourcesElements[i];
        var elementName = dataSourcesElementsNames[i];

        var status = false;
        if(body.status === 200) { status = true; }
        else { status = false; } 

        result = {
            name: elementName,
            statusCode: body.status,
            status: 
        }

        console.log('BREAK POINT');
    }

    console.log(dataSourcesElements);
}

function getDataSourcesFromManifest(file) {
    var manifestObj = JSON.parse(xmlContent);
    var dataSources = manifestObj["sap.app"].dataSources;
    return dataSources;
}