const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowsayService', function() {
    const service = {};

    service.message = 'hello from first service';
    service.thecowsays = function(str) {
      str = str || 'DEFAULT';
      return cowsay.say({
        text: str,
        e: 'oO',
        T: 'U'
      });
    };
    return service;
  });
};
