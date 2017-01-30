angular.module('weatherApp')
.service('weatherSvc', function($http, $q) {

var weatherApiKey = '&appid=50416086cc6e53491c8af7c9e034be3c';
var googleMapsApiKey = 'AIzaSyDy6jnOV1gtvykPpupjy834qTipRMLKBdo';
var deferred = $q.defer();

this.getCurrentWeather = function(zipCode) {
    $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipCode + weatherApiKey)
    .then(function(response) {
        console.log(response.data)
        response.data.main.temp = Math.round(response.data.main.temp * (9/5) - 459.65);
        response.data.main.temp_max = Math.round(response.data.main.temp_max * (9/5) - 459.65);
        response.data.main.temp_min = Math.round(response.data.main.temp_min * (9/5) - 459.65);
    deferred.resolve(response.data)  
    })
    return deferred.promise;
}

this.getSixteenDayForecast = function(zipCode) {
    $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?zip=' + zipCode + weatherApiKey)
    .then(function(response) {
        console.log(response.data)
        var list = response.data.list;
        for (var i = 0; i < list.length; i++) {
            for (var key in list[i].temp) {
                list[i].temp[key] = Math.round((list[i].temp[key]) * (9/5) - 459.65)
            }
        }
        deferred.resolve(response.data)
    })
    return deferred.promise;
}

this.getLocationName = function(latitude, longitude) {
    $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latitude + ',' + longitude + '&key=' + googleMapsApiKey)
    .then(function(response) {
        console.log(response)
        deferred.resolve(response)
    })
    return deferred.promise;
}




})