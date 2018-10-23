var application = angular.module('mainApp', []);
application.controller('app', function($scope) {
    $scope.tasks = [];
    var taskData = localStorage['tasksList'];
    if (taskData !== undefined) {
        $scope.tasks = JSON.parse(taskData);
    }
    $scope.searchEnter = function() {
        if(event.which == 13 && $scope.task != "") {
            $scope.addTask();
        }
        
    };
    $scope.addTask = function() {
        $scope.tasks.push({'taskMessage':$scope.task, 'status' : false});
        console.log($scope.tasks);
        $scope.task = '';
        localStorage['tasksList'] = JSON.stringify($scope.tasks);
        

    };
    $scope.contentEdit  = function(msg) {
    for(i = 0; i<$scope.tasks.length; i++) {
        if($scope.tasks[i].taskMessage == msg) {
            $scope.tasks[i].taskMessage = event.target.innerText;
        }

    }
    console.log($scope.tasks);
    localStorage['tasksList'] = JSON.stringify($scope.tasks);
    if(event.target.contentEditable == "false") {
        event.target.contentEditable = "true";
    }
    else {
        event.target.contentEditable = "false";
    }
    console.log(event.target.contentEditable);
        
    };
    $scope.enterAgain = function(msg) {
        if(event.which == 13 && msg != "") {
            $scope.contentEdit(msg);
        }

    }
})