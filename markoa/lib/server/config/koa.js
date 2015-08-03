'use strict';
let bodyParser = require('koa-body-parser');
let koa       = require('koa');
let router    = require('koa-router');
let serve     = require('koa-static');
let views     = require('co-views');
let compress  = require('koa-compress');
let state     = require('../state');
let scss      = require('koa-scss');
let path      = require('path');
let lasso     = require('lasso');

module.exports = function(app, options) {
  configure: function() {
    let DEFAULT_PORT = 4000;

    lasso.configure(options.lassoFile);

    app.use(bodyParser());
    app.use(compress(
      {
        flush: require('zlib').Z_SYNC_FLUSH
      }
    ));
    let publicDir = path.resolve(__dirname + '/../../public');
    app.use(scss({
        src: publicDir,
        dest: publicDir,
        debug: true,
        force: true
    }));
    app.use(serve(publicDir));
    app.use(router(app));
    state.configure(app);
    return app;
  },
  start: function() {
    let port = options.port || DEFAULT_PORT;
    app.listen(port, function() {
      console.log(`Koa appplication render service listens on port ${port}`);
      if (process.send) {
        process.send('online');
      }
    });
    return app;
  }
}
