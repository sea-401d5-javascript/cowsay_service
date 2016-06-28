'use strict';
const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.contoller('CowController', function() {
    const url = 'http://localhost:8080/';
    this.cow = cowsay.say({
      text: 'moooo'
    });
    
  });
};
