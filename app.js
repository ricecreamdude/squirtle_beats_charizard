const koa = require('koa');
const route = require('koa-route');
const app = koa();
const render = require(__dirname + '/lib/render')
var PORT = process.env.PORT || 3000;

app.use(route.get('/hello', render.hello));
app.use(route.post('/hello', render.greet));
// app.use(route.put('/', ));
// app.use(route.delete('/', ));

var server = module.exports = exports = app.listen(PORT, () => console.log('Server up on port ' + PORT));
