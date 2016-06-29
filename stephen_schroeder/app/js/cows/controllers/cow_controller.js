module.exports = function(app) {
  app.controller('CowController', function(CowService) {
    this.msg = '';
    this.cowdata = CowService.say('moo');
    this.cowsay = function (msg) {
      this.cowdata = CowService.say(msg);
    };
  });
};
