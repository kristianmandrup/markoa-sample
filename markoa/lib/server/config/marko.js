'use strict';

let marko     = require('marko');
var path = require('path');
var viewsDir = path.join(__dirname, '../../views');
var refresher = require('marko/browser-refresh');

//refresher.enable();
if (process.env.NODE_ENV !== 'production') {
  // Enable hot reloading in development
  var reloader = require('marko/hot-reload');
  //reloader.enable();
  require('fs').watch(viewsDir, function (event, filename) {
    if (/\.marko$/.test(filename)) {
      // Resolve the filename to a full template path:
      var templatePath = path.join(viewsDir, filename);
      console.log('Marko template modified: ', templatePath);

      // Pass along the *full* template path to marko
      reloader.handleFileModified(templatePath);
    }
  });
}

module.exports = marko;
