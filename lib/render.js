const parse = require('co-body');

exports.get = function *(next) {
  if (this.method !== 'GET') return yield next;
  this.body = 'Hello world!';
};

exports.post = function *(next) {
  if (this.method !== 'POST') return yield next;
  var posted = yield parse(this);
  console.log(posted);
  this.body = 'Posted!';
};

exports.put = function *(next) {
  if (this.method !== 'PUT') return yield next;
  var update = yield parse(this);
  console.log(update);
  this.body = 'Updated!';
};

exports.delete = function *(next) {
  if (this.method !== 'DELETE') return yield next;
  this.body = 'Deleted!';
};
