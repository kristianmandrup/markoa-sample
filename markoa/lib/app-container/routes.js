'use strict';

let routeFactory = require('../server/route-factory');

module.exports = {
  init: function (koaApp) {
    this.koaApp = koaApp;
    return this;
  },
  add: function(name, config) {
    console.log('TODO: add route' + name);
    routeFactory.create(this.koaApp, name, config);

  }
}
