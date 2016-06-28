const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowsayService', function() {
    const service = {};
    service.myCow = cowsay.say({text:'moo'});
    service.makeCow = function(moo){
      let text = moo || 'moo';
      return cowsay.say({text});
    };
    return service;
  });
};
