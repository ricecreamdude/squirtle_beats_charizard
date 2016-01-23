const koa = require('koa');
const route = require('koa-route');
const app = koa();
const render = require(__dirname + '/lib/render');
var PORT = process.env.PORT || 3000;

app.use(route.get('/get', render.get));
app.use(route.post('/post', render.post));
app.use(route.put('/put', render.put));
app.use(route.delete('/delete', render.delete));

var server = module.exports = exports = app.listen(PORT, () => console.log('Server up on port ' + PORT));
