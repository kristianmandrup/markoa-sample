module.exports = {
  deposit: require('./deposit'),
  transactions: require('./transactions'),
  configure: function(app) {
    // this.deposit(app);
    // this.transactions(app);
    return true
  }
}
