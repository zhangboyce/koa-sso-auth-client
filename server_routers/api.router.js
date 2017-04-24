'use strict';

const router = require('koa-router')();
const rp = require('request-promise');

router.get('/', function *() {
    yield this.render('index');
});

router.get('/main', function *() {
    this.body = '<h1>i am the main page.</h1>'
});

module.exports = router;