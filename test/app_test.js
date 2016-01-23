const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../app');
var origin = 'localhost:3000';

describe('rest functionality of the server', () => {
  after(() => server.close());

  it('should respond to a GET request', (done) => {
    request(origin)
      .get('/get')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Hello world!');
        done();
      });
  });

  it('should respond to a POST request', (done) => {
    request(origin)
      .post('/post')
      .send('{"msg":"test"}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Posted!');
        done();
      });
  });

  it('should respond to a PUT request', (done) => {
    request(origin)
      .put('/put')
      .send('{"msg":"put test"}')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Updated!');
        done();
      });
  });

  it('should respond to a DELETE request', (done) => {
    request(origin)
      .delete('/delete')
      .end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Deleted!');
        done();
      });
  });
});
