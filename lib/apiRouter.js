const parse = require('co-body');
var apiRouter = require('koa-router')();
var pokemonRouter = require('koa-router')();

pokemonRouter.get('/pokemon', function*(next) {
  if (this.method !== 'GET') return yield next;
  this.body = 'Hello world!';
});
pokemonRouter.post('/pokemon', function*(next) {
  if (this.method !== 'POST') return yield next;
  var posted = yield parse(this);
  this.body = 'Posted!';
});
pokemonRouter.put('/pokemon', function*(next) {
  if (this.method !== 'PUT') return yield next;
  var update = yield parse(this);
  this.body = 'Updated!';
});
pokemonRouter.delete('/pokemon', function*(next) {
  if (this.method !== 'DELETE') return yield next;
  this.body = 'Deleted!';
});

apiRouter.use('/api', pokemonRouter.routes(), pokemonRouter.allowedMethods());
module.exports = exports = apiRouter;
