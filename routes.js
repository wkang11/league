module.exports = function(app){
    var service = require('./services/apiService');
    app.get('/api/summoner/basic/:name', service.findBasicByName);
    app.get('/api/summoner/basic/:ID', service.getSummonerByID);    
    app.get('/api/version', service.getVersionNumber);
    app.get('/api/champions', service.getAllChampions);
    
}
