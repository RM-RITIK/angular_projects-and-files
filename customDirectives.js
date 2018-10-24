
var application = angular.module('mainApp', []);
application.directive('myFirstDirective', function() {
    function linkFunction(scope, elem, attrs) {
        elem.bind('click' , function() {
            alert(elem[0].innerHTML);
        })

    }
    return {
        template: 'Hello World!',
        restrict: 'A',
        link: linkFunction
    };

});
application.directive('myFirstScript', function() {
    function linkFunctions($scope, elem, attrs) {
        $scope.name = "hello world!";
        $scope.changeName = function() {
            $scope.name = $scope.controllerProperty;
        }
    }
    return {
        restrict : 'A',
        scope: {},
        link : linkFunctions,
        template: '<span ng-click = "changeName()">Current Text : {{name}} </span>' 
    }
})
application.controller('app', function($scope) {
    $scope.controllerProperty = "this is a controller specific property."

});