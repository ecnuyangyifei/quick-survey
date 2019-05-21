"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
function getSchemaName() {
    var schema = JSON.parse(fs.readFileSync('./schema.json', { encoding: 'utf8' }));
    return schema.name;
}
var schemaName = getSchemaName();
function loadData() {
    var dataPath = schemaName + ".json";
    if (fs.existsSync(dataPath)) {
        return JSON.parse(fs.readFileSync(dataPath, { encoding: 'utf8' }));
    }
    else {
        return [];
    }
}
function saveData(data) {
    var dataPath = schemaName + ".json";
    fs.writeFileSync(dataPath, JSON.stringify(data));
}
var app = express();
app.use(express.static('dist/quick-survey'));
app.use(bodyParser.json());
app.post('/submit', function (req, res) {
    console.log('submit is called', req.body);
    var dataSet = loadData();
    dataSet.push(req.body);
    saveData(dataSet);
    res.status(200)
        .end('success');
});
app.get('/load', function (req, res) {
    console.log('load is called');
    var dataSet = loadData();
    res.setHeader('Content-Type', 'application/json');
    res.status(200)
        .end(JSON.stringify(dataSet));
});
var port = process.env.port || 8081;
app.listen(port, function () {
    console.log('qucik-survey started, listening', port);
});
