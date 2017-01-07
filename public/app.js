angular.module('ScreenshotMaker', [
    'ngCookies', 
    'ngResource', 
    'ngMessages', 
    'ngRoute', 
    'mgcrea.ngStrap',
    'ngWebSocket'
])
.config(['$locationProvider' ,'$routeProvider' , function($locationProvider,$routeProvider) {
    // set up for html5 
    $locationProvider.html5Mode(true);
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'homeController'
      })
      .when('/shows/:id', {
        templateUrl: 'views/details/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/add', {
        templateUrl: 'views/add.html',
        controller: 'AddCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
}]);