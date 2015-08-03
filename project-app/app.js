'use strict';
// for development/testing
let markoa = require('markoa');
let appContainer = markoa.appContainer();
var account = require('./lib'); // myself
// appContainer.init(koaServer); ??
account.mountIn(appContainer);
appContainer.init(koa).start();
