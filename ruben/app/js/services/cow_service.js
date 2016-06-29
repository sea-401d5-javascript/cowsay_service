'use strict';

const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowService', function() {
    const service = {};
    service.test = 'test string from cowsay service';
    service.testCow = cowsay.say({text: 'moo'});
    service.makeCow = function(text) {
      file = file || 'vader';
      text = text || 'default moo';
      return cowsay.say({text});
    };

    return service;
  });
};
