'use strict';

const path = require('path');
const koa = require('koa');
const render = require('koa-swig');

const app = koa();
app.context.render = render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    ext: 'html'
});

app.keys = ['cce-ato-sso-c1-2016','keys'];
app.use(require('koa-session')(app));

app.use(require('koa-static')(path.join(__dirname, 'build')));
app.use(require('koa-static-server')({rootDir: 'public', rootPath: '/public'}));

require('./server_routers')(app);

const port = 18888;
app.listen(port);
console.log('cce-ato-sso-c1 listening on port ' + port);