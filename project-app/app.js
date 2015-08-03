'use strict';
// for development/testing
let markoa = require('markoa');
let appContainer = markoa.appContainer();
var account = require('./lib'); // myself
account.mountIn(appContainer);
appContainer.init(koa).start();
