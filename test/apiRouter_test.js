const chai = require('chai').use(require('chai-http'));
const expect = chai.expect;
const request = chai.request;
const server = require(__dirname + '/../app');

describe('REST requests to Pokemon API routes on the server.', () => {
  after(() => server.close());
});
