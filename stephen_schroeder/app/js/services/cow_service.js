'use strict';
const cowsay = require('cowsay-browser');

module.exports = function(app) {
  app.factory('CowService', function() {
    const service = {};
    service.say = function(msg) {
      let cow =
      cowsay.say({
        text: msg
      });
      return cow;
    };
    return service;
  });
};

// 'use strict';
//
// const cowsay = require('cowsay-browser');
//
// module.exports = function(app) {
//   app.factory('CowService', function() {
//     const service = {};
//     service.test = 'test string from CowsayService';
//     service.testCow = cowsay.say({text: 'test moooooo'});
//     service.makeCow = function(text, file) {
//       file = file || 'bud-frogs';
//       text = text || 'Moooooo Sucka!';
//       return cowsay.say({text, f:file});
//     };
//     return service;
//   });
// };
