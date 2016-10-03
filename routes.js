module.exports = function(app){
    var service = require('./services/apiService');
    app.get('/api/summoner/basic/:name', service.findBasicByName);
    app.get('/api/version', service.getVersionNumber);
}
