'use strict';
let markoa = require('markoa');
let path = require('path');

let lassoFile = path.join(__dirname, './lasso-config.json');
let serverOpts = {port: 4004, lassoFile: lassoFile};

let koaApp = markoa.server(serverOpts).init(function(mws) {
  mws.minimal();
});

let myAppContainer = require('./lib/app-container');
myAppContainer.init(koaApp);

// mounting multiple apps on appContainer instance
// myAppContainer.mountApps(['account']);
