var fileX = {
    "records": [
        {
            "Name" : "Richa",
            "Age" : "30",
            "Profession" : "Doctor"
        },
        {
            "Name" : "Priyanka",
            "Age" : "28",
            "Profession" : "Engineer"

        },
        {
            "Name" : "Ritik",
            "Age" : "18",
            "Profession" : "Engineer"
        }
        
    ]
}
var app = angular.module('mainApp', []);
app.controller('people', function($scope) {
    $scope.persons = fileX.records; 
});