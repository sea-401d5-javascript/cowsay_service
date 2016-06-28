module.exports = function(app) {
  app.controller('CowsayController', function($http, CowsayService) {
    this.thecowsays = CowsayService.thecowsays;
    this.message = CowsayService.message;
    this.text = {
      body: 'controllerDEFAULT'
    };
  });
};
