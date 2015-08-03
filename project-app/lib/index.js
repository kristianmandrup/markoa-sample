'use strict';
let path = require('path');
let state = require('./state');
let markoa = require('markoa');
let app = markoa.app
let appConfig = app.config(__dirname, state)
module.exports = app.mounter('account', appConfig);
