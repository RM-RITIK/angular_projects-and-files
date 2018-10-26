var application = angular.module('mainApp', ['ngCookies']);
application.controller('app' , function($scope, $cookies) {
    $scope.myCookieVal = $cookies.get('cookie')
    $scope.setCookie = function(val) {
        $cookies.put('cookie', val);
    }
})