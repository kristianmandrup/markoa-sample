'use strict';
let koa    = require('koa');
let marko  = require('markoa');
let lassoFile = path.join(__dirname, './lasso-config.json');
let app = markoa.server.configure(koa(), {port: 4004, lassoFile: lassoFile});
// init appContainer and mount SPA apps
let appContainer = require('./lib/app-container');
appContainer.mountApps(app);
// create an index route
//buildRoute('index', '/');

// TODO: load from json config

// create routes for each page
//for (let page of pages )
//  buildRoute(page);
