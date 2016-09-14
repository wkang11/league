'use strict';
var http = require("http");
var APIKey = "40876847-d0d6-43d0-9718-16ac33582f61";

function findInfoByID(req, res) {
    var name = req.params.name;
    console.log(name+'log please show up for param name');
    var url = "/api/lol/na/v2.5/league/by-summoner/" + name + "/entry?api_key=" + APIKey

    var options = {
        hostname: 'https://na.api.pvp.net',
        path: url,
        method: 'GET'
    }

    var request = http.request(options, function (response) {
        var body = "";
        response.on('data', function (data) {
            body += data;
        });
        response.on('end', function () {
            res.send(JSON.parse(body));
        });
    });

    request.on('error', function (e) {
        console.log('Problem with request: ' + e.message);
    });
    request.end();
}


function findBasicByName(req, res) {
    var name = req.params.name;
    console.log(name+'log please show up for param name');
    var url = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/" + name + "?api_key=" + APIKey

    var options = {
        url: url,
        method: 'GET'
    }

    var request = http.request(options, function (response) {
        var body = "";
        response.on('data', function (data) {
            body += data;
        });
        response.on('end', function () {
            res.send(JSON.parse(body));
        });
    });

    request.on('error', function (e) {
        console.log('Problem with request: ' + e.message);
    });
    request.end();
}



module.exports = {
    findBasicByName: findBasicByName,
    findInfoByID: findInfoByID
}