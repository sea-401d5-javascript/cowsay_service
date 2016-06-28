'use strict';
const cowsay = require('cowsay-browser');
module.exports = function(app) {
  app.factory('CowService', function() {
    return cowsay.say({
      message: 'mooo'
    });
  });
};
