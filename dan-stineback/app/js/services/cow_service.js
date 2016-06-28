'use strict';
module.exports = function(app) {
  app.factory('CowService', function() {
    const service = {};
    service.message = 'hello';
    return service;
  });
};
