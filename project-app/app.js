'use strict';
// for development/testing
let markoa = require('markoa');
let serverOpts = {};
let koaApp = markoa.server(serverOpts).init(function(mws) {
  mws.minimal();
});
let appContainer = markoa.appContainer().init(koaApp);
var account = require('./lib'); // myself
account.mountIn(appContainer);
appContainer.start();
