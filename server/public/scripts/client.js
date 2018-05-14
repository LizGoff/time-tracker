console.log('Hi!');

var app = angular.module('TimeApp', ['ngRoute', 'ngMaterial']);

app.config(['$routeProvider', function ($routeProvider) {
    console.log('Route config loaded');

    $routeProvider
        .when('/', {
        templateUrl: '/views/home.view.html',
        controller: 'HomeController as vm'
    })
    .when('/project_entries', {
        templateUrl: '/views/project_entries.view.html',
        controller: 'EntriesController as vm'
    })
    .when('/project_time', {
        templateUrl: '/views/project_time.view.html',
        controller: 'TimeController as vm'
    })
        .otherwise({
        template: '<h1>404</h1>'

    });
}]);
