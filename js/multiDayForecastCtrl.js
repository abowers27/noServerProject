angular.module('weatherApp')
.controller('multiDayForecastCtrl', function($scope, weatherSvc) {

    $scope.getSixteenDayForecast = function(zipCode) {
        weatherSvc.getSixteenDayForecast(zipCode).then(function(response) {
            $scope.days = response.list;
            for (var i = 0; i < response.list.length; i++) {
                response.list[i].dt = moment((response.list[i].dt) * 1000).format('dddd, MMM Do');
            }
            $scope.city = response.city.name;

        })
    }
    

})