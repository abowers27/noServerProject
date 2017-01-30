angular.module('weatherApp')
.directive('compareDir', function() {

    return {
        restrict: 'AE',
        templateUrl: 'views/compare.html',
        controller: 'todayCtrl'
    }

})