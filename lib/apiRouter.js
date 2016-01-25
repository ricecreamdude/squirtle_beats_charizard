var parse = require('co-body'), apiRouter = require('koa-router')(), pokemonRouter = require('koa-router')(), Pokemon = require(__dirname + '/pokemon');
pokemonRouter.all('/pokemon', function*(next) {
  try {
    switch (this.method) {
    case 'GET':
      var pokemon = yield Pokemon.find({}).exec();
      this.body = pokemon;
      break;
    case 'POST':
      var json = yield parse(this);
      var pokemonToSave = new Pokemon({name: json.name, type: json.type});
      yield pokemonToSave.save();
      this.body = 'Success!';
      break;
    }
  } catch(e) {
    this.status = 500;
    this.body = e.toString();
  }
});
pokemonRouter.all('/pokemon/:id', function*(next) {
  try {
    switch (this.method) {
    case 'PUT':
      this.pokemon = yield Pokemon.findOne(this.params.id);
      var pokemonData = yield parse(this);
      delete this.pokemon._id;
      yield Pokemon.update({_id: this.pokemon._id}, pokemonData);
      this.body = 'Updated!';
      break;
    case 'DELETE':
      this.pokemon = yield Pokemon.findOne(this.params.id);
      delete this.pokemon._id;
      yield Pokemon.remove({_id: this.pokemon._id});
      this.body = 'Deleted!';
      break;
    }
  } catch(e) {
    this.status = 500;
    this.body = e.toString();
  }
});
module.exports = exports = apiRouter.use('/api', pokemonRouter.routes(), pokemonRouter.allowedMethods());
