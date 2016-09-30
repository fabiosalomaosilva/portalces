angular.module("appCes").config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: 'views/home.html',
            resolve: {
                message: function () {
                    alert("Deu certo");
                }
            }
        })
        .when('/login', {
            controller: 'loginController',
            templateUrl: 'views/login.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});