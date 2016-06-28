module.exports = function(app) {
  app.controller('CowsayController', function($http, CowsayService) {
    this.thecowsays = CowsayService.thecowsays;
    this.cow = CowsayService.thecowsays('i say moo to start');
  });
};
