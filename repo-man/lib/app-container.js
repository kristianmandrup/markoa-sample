'use strict';
let markoa = require('markoa');
let app = markoa.app;

module.exports = {
  markoa: {},
  init: function(koaApp) {
    this.markoa.appContainer = markoa.appContainer().init(koaApp).start();
    return this;
  },
  root: __dirname,
  config: function() {
    return {root: this.root};
  },
  appList: ['account', 'index'],
  appConfigs: function(apps) {
    let conf = this.config();
    apps = apps || this.appList;
    // mounting multiple apps from same root dir, blank state
    return apps.map(function(name) {
      return app.config(name, conf);
    });
  },
  mountApps: function(list) {
    this.markoa.appContainer.mountConfigs(this.appConfigs(list))
  }
}
