module.exports = function(app, options) {
  return {
    defaultList: ['static', 'request', 'response', 'lasso', 'router'],
    list: function() {
      options.mws || this.defaultList;
    }
    static: function() {
      require('./static')(app, options);
      return this;
    },
    request: function() {
      require('./request')(app, options);
      return this;
    },
    response: function() {
      require('./response')(app, options);
      return this;
    },
    // config via list of strings
    config: function(mws) {
      mws = mws || this.list();
      for (let mw of mws) {
        let fn = this[mw];
        if (typeof fn === 'function')
          fn();
      }
    },
    configAll: function() {
      for (mw of this.list())
        this.config(mw);
    }
  }
};
