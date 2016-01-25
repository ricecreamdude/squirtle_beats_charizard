const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../app');

//Variables to make my life easier
var theHost = 'localhost:3000';
var port = 3000
var URI = '/api/pokemon';

//Defining test database
process.env.MONGOLAB_URI = 'mongodb://localhost:/pokemon_test' ;


describe('REST requests to Pokemon API routes on the server.', () => {
  
  //Close DB and Server connection at end of testing
  after( (done) => {
  	mongoose.connection.db.dropDatabase( () => {
 			server.close();
 			done(); 
  	}); 
  });

  it('should be able to retrieve all the pokemons with GET' , (done) => {
  	request(theHost)
  		.get(URI)
  		.end( (err , res) => {
  			expect(err).to.eql(null);
  			expect(res.status).to.eql(200);
  			expect(res.body).to.eql(true);
  			done();
  		});
  });

	// it('should be able to create a pokemon with a POST' , (done) => {



 //  });

	// it('should be able to update a pokemon with a specified ID' , (done) => {

 //  });

	// it('should be able to delete a specified pokemon' , (done) => {

 //  });

	// it('should ' , (done) => {

 //  });



});
