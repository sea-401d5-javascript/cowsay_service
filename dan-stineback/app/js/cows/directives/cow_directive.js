'use strict';
module.exports = function(app) {
  app.directive('cowForm', function() {
    return {
      scope: {
        type: '@',
        cow: '='
      },
      templateUrl: './templates/cow_template.html'

    };
  });
};
