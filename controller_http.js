var app = angular.module('mainApp', []);
app.controller('people', function($scope, $http) {
    $http.get('database1.json')
    .success(function(response) {
        $scope.persons = response.records;
    });
});