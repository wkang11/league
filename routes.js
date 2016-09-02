var express = require('express');
var http = require('http');


var router = express.Router();
var apiService = require('./services/apiService');

/* GET home page. */
router.get('/api/summoner/basic/:name', function(req, res) {
    var name = req.params.name;
    apiService.findBasicByName(name, function(err,res){
        if(err){
            res.status(400).send('invalid request for basic name');
        }else{
            res.status(200).send('get user name'+ name);
        }
    });
   
    
});

module.exports = router;

