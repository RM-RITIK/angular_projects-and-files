var application = angular.module('mainApp', []);
application.provider('date', function() {
    var greet;
    return {
        setGreeting: function(value) {
            greet = value;

        },
        $get: function() {
            return {
                showDate: function() {
                    var date = new Date();
                    return date.getHours();
                },
                disShowDate: function() {
                    var date = new Date();
                    return greet + " Its " + date.getHours();

                }
            }
        }
    }
});
application.config(function(dateProvider) {
    var time = dateProvider.$get().showDate();
    if(time>0 && time < 12) {
        dateProvider.setGreeting("Good morning!");

    }
    else if (time>=12 && time < 17) {
        dateProvider.setGreeting("Good Day!")
    }
    else if (time>=17 && time<19) {
        dateProvider.setGreeting("Good Evening!");
    }
    else {
        dateProvider.setGreeting("Sweet Dreams!");
    }

});
application.controller('app', function($scope, date) {
    $scope.clock = date.disShowDate();
})