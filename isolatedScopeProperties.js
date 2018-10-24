var application = angular.module('mainApp' ,[]);
application.directive('myFirstScript', function() {
    return {
        restrict: 'EA',
        scope: {
            name: '@',
            age: '=',
            fun: '&'
        },
        template: ['<p> Value of name in directive: {{name}}',  '<p>Enter New Name: <input type = "text" ng-model = "name"></p>',
        '<p> Value of age in directive : {{age}}', '<p>Enter a New Age: <input type = "text" ng-model = "age">',
        '<button ng-click = "fun()"> from directive </button>'].join()
    }
});
application.controller('app' , function($scope) {
    $scope.name = "ritik";
    $scope.age = 100;
    $scope.alertTheName = function() {
        alert($scope.name);
    }
})




// @ - text bind
// = - two way bind
// & - one way bind