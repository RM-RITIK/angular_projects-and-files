var application = angular.module('mainApp', []);

application.filter('base', function() {
    var x = function(input, base) {
        var parsed = parseInt(input, 10);
        var based = parseInt(base, 10);
        if(isNaN(parsed) || isNaN(based) || based<=1 || based>=37) {
            return 'Error! invalid number or base';
        }
        return parsed.toString(based);
    }
    return x;
});

application.controller('app' ,function() {

});