var app = angular.module('mainApp', []);
app.controller('app', function($scope) {
    $scope.myRandomNumber = Math.random();
    document.getElementById("press").onclick = function() {
        console.log('button clicked.');
        $scope.myRandomNumber = Math.random();
        $scope.$digest();
    }
})