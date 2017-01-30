angular.module('weatherApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
        url:'/',
        templateUrl:'/views/home.html',
        controller: 'homeCtrl'
    })
    .state('today', {
        url:'/today',
        templateUrl:'/views/today.html',
        controller:'todayCtrl'
    })
    .state('multiDayForecast', {
        url:'/multiDayForecast',
        templateUrl:'/views/multiDayForecast.html',
        controller:'multiDayForecastCtrl'
    })
})