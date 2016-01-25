const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../app');
const mongoose = require('mongoose');
const Pokemon = require(__dirname + '/../lib/pokemon');

// Variables to make my life easier
var theHost = 'localhost:3000';
var URI = '/api/pokemon';

// Defining test database
process.env.MONGOLAB_URI = 'mongodb://localhost:/pokemon_test';

describe('REST requests to Pokemon API routes on the server.', () => {
  // Close DB and Server connection at end of ALL testing
  after((done) => {
    mongoose.connection.db.dropDatabase(() => {});
    server.close();
    done();
  });

  it('should be able to retrieve all the pokemons with GET', (done) => {
    request(theHost)
      .get(URI)
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.body).to.eql([]);
        done();
      });
  });

  it('should be able to create a pokemon with a POST', (done) => {
    request(theHost)
      .post(URI)
      .send('{"name":"", "type":""}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.status).to.eql(200);
        expect(res.body).to.eql({msg: 'Success!'});
        done();
      });
  });

  // Seperating different request types
  // NESTED describe statement
  describe('Tests that require a Pokemon to be in the database', () => {
    beforeEach((done) => {
      // We don't actually test the DATABASE for insertions or deletions of objects.
      // We only test for confirmation from the router.

      // Creates a test pokemon mongo document before each test is run.
      // New pokemon is inserted to MDB pokemon_test collection at this point.
      Pokemon.create({name: 'test_pokemon', type: ''}, (err, data) => {
        if (err) throw err;
        this.testPokemon = data;
        done();
      });
    });

    it('should be able to PUT update a pokemon with a specified ID', (done) => {
      request(theHost)
        .put(URI + '/:' + this.testPokemon._id)
        .send({name: 'Mewtwo'})
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res.status).to.eql(200);
          expect(res.body).to.eql({msg: 'Updated!'});
          done();
        });
    });

    it('should be able to DELETE a pokemon with a specified ID', (done) => {
      request(theHost)
        .delete(URI + '/:' + this.testPokemon._id)
        .end((err, res) => {
          expect(err).to.eql(null);
          expect(res.status).to.eql(200);
          expect(res.body).to.eql({msg: 'Deleted!'});
          done();
        });
    });
  });
});
