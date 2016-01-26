require('mongoose').connect(process.env.MONGOLAB_URI || 'mongodb://localhost/pokemon');

module.exports = exports = require('koa')().use(require(__dirname + '/lib/api_router').routes()).listen((process.env.PORT || 3000));
