angular.module('weatherApp')
.directive('headerDir', function() {

    return {
        restrict: 'AE',
        templateUrl: 'views/header.html'
    }

})