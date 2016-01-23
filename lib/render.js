exports.hello = function *(next) {
  if ('GET' != this.method) return yield next;
  this.body = {msg: "Hello world!"};
};

exports.greet = function*(next) {
  if ('POST' != this.method) return yield next;
  console.log(this.request);
  console.log(this.response);
}
