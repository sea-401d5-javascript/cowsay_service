module.exports = function(app){
  app.directive('textForm', function() {
    return {
      scope: {
        text: '='
      },
      templateUrl: './templates/cowsay/text_form.html',
      require: '^^ngController',
      link: function($scope, elem, attr, controller) {
        $scope.submit = function(str) {
          controller.cow = controller.thecowsays(str.body);
        };
        controller.text = $scope.text;
      }
    };
  });
};
