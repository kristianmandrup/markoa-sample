let config = require('./config')

module.exports = {
  config: config,
  render: require('./render'),
  route: require('./route'),
  configure: function (app, options) {
    return config.koa(app, options).configure();
  }
}
