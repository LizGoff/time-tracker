console.log('Hi!');

var app = angular.module('TimeApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
        templateUrl: '/views/home.view.html',
        controller: 'HomeController as vm'
    })
        .otherwise({
        template: '<h1>404</h1>'

    });
}]);
