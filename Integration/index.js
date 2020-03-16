var fs = require('fs');
var request = require('request');

//=========================================================================

main();

function main() {
    console.log("Start of SAPUI5 integration test modul... ok");

    var xmlPath = "./Integration/manifest.json";
    var xmlContent = fs.readFileSync(xmlPath, "utf8");

    var dataSources = getDataSourcesFromManifest(xmlContent);
    checkODataService(dataSources, (results) => {
        rateTestResults(results);
        console.log("BREAK POINT");
    });


}

function rateTestResults(oDataTestResults){
    //this function should decide if the whole test run was successfull or
    //if you should abort

    var isSuccessfull = true;

    for(var i = 0; i < oDataTestResults.length; i++){
        if(!oDataTestResults[i].status) isSuccessfull = false;
    }

    if(!isSuccessfull) process.exit(1);
    else process.exit(0);

}

function callODataService(url) {
    return new Promise((resolve, reject) => {
        request(url, {
            json: true,
            headers: {
                origin: "localhost"
            }
        }, (err, res, body) => {
            if (err) {
                reject(err);
            }
            else if (res.statusCode === 200) {
                resolve(res)
            } else reject(res);
        });
    })
}

async function checkODataService(dataSources, cb) {
    var dataSourcesElements = Object.values(dataSources);
    var dataSourcesElementsNames = Object.keys(dataSources);

    var results = [];

    for (var i = 0; i < dataSourcesElements.length; i++) {
        var element = dataSourcesElements[i];
        var elementName = dataSourcesElementsNames[i];

        var res = {};

        try {
            res = await callODataService(element.uri);
        } catch (err) {
            res.statusCode === 0;
        }

        var status = false;
        if (res.statusCode === 200) {
            status = true;
        } else {
            status = false;
        }

        result = {
            name: elementName,
            statusCode: res.statusCode,
            status: status
        }

        results.push(result);
    }

    cb(results);
}

function getDataSourcesFromManifest(file) {
    var manifestObj = JSON.parse(file);
    var dataSources = manifestObj["sap.app"].dataSources;
    return dataSources;
}



// ============== some event handling ==========================

process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});