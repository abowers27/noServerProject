angular.module('weatherApp')
.controller('todayCtrl', function($scope, weatherSvc) {

      $scope.getCurrentWeather = function(zipCode) {
        weatherSvc.getCurrentWeather(zipCode).then(function(response) {
            $scope.city = response.name;
            $scope.temp = 'Current Temp: ' + response.main.temp + '°F';
            $scope.high = 'High: ' + response.main.temp_max + '°F';
            $scope.low = 'Low: ' + response.main.temp_min + '°F';
            $scope.humidity = 'Humidity: ' + response.main.humidity + '%';
            $scope.conditions = 'Conditions: ' + response.weather[0].description;
            $scope.sunrise = 'Sunrise: ' + moment(response.sys.sunrise * 1000).format('LT')
            $scope.sunset = 'Sunset: ' + moment(response.sys.sunset * 1000).format('LT')
            $scope.zipCode = '';
            $scope.sug = response.main.temp_max;
            var main = response.weather[0].main;
            if (main === 'Clouds') {
                $scope.icon = 'images/cloud-icon.png';
            } else if (main === 'Clear') {
                $scope.icon = 'images/sunny-icon.png';
            } else if (main === 'Mist') {
                $scope.icon = 'images/mist-icno.png'
            }
        })
    }

    $scope.suggestions = function() {
        var suggest = '';
        if ($scope.sug <= 25) {
            suggest = 'Bundle up!'; 
        } else if ($scope.sug > 25 && $scope.sug < 40) {
            suggest = 'Light coat';
        } else {
            suggest = 'Enjoy the warmth!'
        }
        window.alert(suggest);
    }
    
}) 