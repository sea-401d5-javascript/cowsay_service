'use strict';
module.exports = function(app) {
  app.controller('CowController', function(CowService) {
    this.cowImage = CowService;
  });
};
