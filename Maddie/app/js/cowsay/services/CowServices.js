const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowSayService', function() {
    const service = {};
    service.cowsTwo = function() {
      return cowsay.say;
    };
    service.cow = cowsay.say;
    return service;
  });
};
