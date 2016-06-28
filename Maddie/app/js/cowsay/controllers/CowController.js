'use strict';
module.exports = function(app){
  app.controller('CowController', function(CowSayService) {
    this.setCow = function(str) {
      this.text = CowSayService.cow({text:str, f:'kitty'});
    };
  });
};
