const mongoose = require('mongoose');
var pokemonSchema = new mongoose.Schema({
  name: {type: String, default: 'Pokemon'},
  type: {type: String, default: 'Unknown'}
});
module.exports = exports = mongoose.model('Pokemon', pokemonSchema);
