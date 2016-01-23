const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../app');

describe('REST requests to Pokemon API routes on the server.', () => {
  after(() => server.close());
  it('Should respond to a GET request.', (done) => {
    request('localhost:3000/api').get('/pokemon').end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Hello world!');
        done();
    });
  });
  it('Should respond to a POST request.', (done) => {
    request('localhost:3000/api').post('/pokemon').send('{"msg":"test"}').end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Posted!');
        done();
    });
  });
  it('Should respond to a PUT request.', (done) => {
    request('localhost:3000/api').put('/pokemon').send('{"msg":"put test"}').end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Updated!');
        done();
    });
  });
  it('Should respond to a DELETE request.', (done) => {
    request('localhost:3000/api').delete('/pokemon').end((err, res) => {
        expect(err).to.eql(null);
        expect(res.text).to.eql('Deleted!');
        done();
    });
  });
});
