angular.module('bankSearchApp').factory('bankSearchService', ['$http', '$q', function ($http, $q) {
    return {
        getBankList: function (cityName) {
            if (cityName) {
                return $http.get('https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI').then(function (response) {
                    if(response && response.status === 200 && response.data){
                        return response.data;
                    }
                    else{
                        return $q.reject(response);
                    }
                });
            }
            else {
                return $q.reject('City Name Missing');
            }
        }
    }
}]);