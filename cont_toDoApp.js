var application = angular.module('mainApp', []);
application.controller('app', function($scope) {
    $scope.tasks = [];
    $scope.searchEnter = function() {
        if(event.which == 13 && $scope.task != "") {
            $scope.addTask();
        }
        
    };
    $scope.addTask = function() {
        $scope.tasks.push({'taskMessage':$scope.task, 'status' : false});
        console.log($scope.tasks);
        $scope.task = '';
        

    };
    $scope.contentEdit  = function() {
    if(event.target.contentEditable == "false") {
        event.target.contentEditable = "true";
    }
    else {
        event.target.contentEditable = "false";
    }
    console.log(event.target.contentEditable);
        
    }
})