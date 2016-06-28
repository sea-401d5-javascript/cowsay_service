'use strict';
const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.contoller('CowController', function() {
    this.cow = cowsay.say({
      text: 'moooo'
    });

  });
};
