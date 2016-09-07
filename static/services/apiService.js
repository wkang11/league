'use strict';
var request = require('superagent-cache')();
var APIKey = "40876847-d0d6-43d0-9718-16ac33582f61";

function findBasicByName(name, findByNameCallback){
    var url = "https://na.api.pvp.net/api/lol/na/v2.5/league/by-summoner/" + name + "/entry?api_key=" + APIKey

    request.get(url).end(function(data){
        findByNameCallback(null,data);
    });
}

module.exports={
    findBasicByName: findBasicByName
}