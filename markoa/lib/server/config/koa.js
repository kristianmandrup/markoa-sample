'use strict';
let mw        = require('./mw');

module.exports = function(app, options) {
  DEFAULT_PORT: 4000,
  configure: function() {
    mw(app, options).configAll();
    return app;
  },
  start: function() {
    let port = options.port || this.DEFAULT_PORT;
    app.listen(port, function() {
      console.log(`Koa appplication render service listens on port ${port}`);
      if (process.send) {
        process.send('online');
      }
    });
    return app;
  }
}
