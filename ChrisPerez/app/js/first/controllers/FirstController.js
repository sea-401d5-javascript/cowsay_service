module.exports = function(app) {
  app.controller('FirstController', function($http, CowsayService) {
    this.cow = '';
    this.makeCow = function(moo){
      this.cow = CowsayService.makeCow(moo);

    };
  });
};
