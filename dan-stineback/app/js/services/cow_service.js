'use strict';
const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowService', function() {
    const service = {};
    service.say = function(msg) {
      let cow =
        cowsay.say({
          text: msg
        });
      return cow;
    };
    return service;
  });
};
