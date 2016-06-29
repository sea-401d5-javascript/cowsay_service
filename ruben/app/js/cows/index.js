module.exports = function() {
  require('./controllers')(app);
  require('./directives')(app);
};
