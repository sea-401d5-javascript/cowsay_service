'use strict';

const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.controller('CowController', function($http, CowService) {
    const url = ('http://localhost:3000/');

    this.testCow = CowService.makeCow();
  });
};
