var application = angular.module('mainApp', ['ngAnimate']);
application.controller('app', function($scope) {
    $scope.foods = ['pizza' , 'burger', 'Extra Cheesy Burger', 'chowmein'];
})