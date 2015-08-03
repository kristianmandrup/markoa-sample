'use strict';

var render = require('./render');

// returns function which can create marko routes using data dictionary for async fragments
module.exports =  {
  create: function(app, pageName, config) {
    let renderPage = render.factory(pageName, config);
    let routeName = pageName;
    app.get(`/${routeName}`, function*() {
      let context = this;
      let templateData = config.state; // improve!
      templateData.request = context.request;
      renderPage(this, pageName, templateData);
    });
  }
}
