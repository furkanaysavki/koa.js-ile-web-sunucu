var koa = require('koa');
var route = require('koa-route');
var app = koa();
app.use(route.get('/', index));
app.use(route.get('/about', about));
app.use(route.get('/contact', contact));
function *index() {
 this.body = "<h1>index sayfasi</h1>";
}
function *about() {
 this.body = "<h1>hakkimda sayfasi</h1>";
}
function *contact() {
    this.body = "<h1>iletisim sayfasi</h1>";
   }
app.listen(3000);
