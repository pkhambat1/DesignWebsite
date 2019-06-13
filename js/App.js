
(function () {

    var app = angular.module('sampleApp',['ngRoute']);
    
    app.config(function ($routeProvider){
        $routeProvider
            .when('/',{
                templateUrl:'home.html'
            })
            .when('/code',{
                templateUrl:'code.html'
            })
            .when('/fun',{
                templateUrl:'fun.html'
            })
            .otherwise({ redirectTo:'/'});
    });
})();