'use strict';

module.exports = function (app) {
    app.use(require('koa-sso-auth-cli')({
        sso_server: 'http://localhost:8888',
        sso_client: 'http://localhost:18888'
    }, app));

    const apiRouters = require('./api.router');
    app.use(apiRouters.routes()).use(apiRouters.allowedMethods());
};