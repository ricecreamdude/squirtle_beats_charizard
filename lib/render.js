const parse = require('co-body');

exports.get = function *(next) {
  if (this.method !== 'GET') return yield next;
  this.body = {msg: 'Hello world!'};
};

exports.post = function *(data, next) {
  if (this.method !== 'POST') return yield next;
  var posted = yield parse(this);
  console.log(posted);
  this.body = 'Posted!';
};
