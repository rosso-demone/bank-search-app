angular.module('bankSearchApp').controller('homePageController', ['bankSearchService', function (bankSearchService) {
    var self = this;
    /********************************* view ***********************************/
    self.onChangeCity = function () {
        onChangeCity();
    };
    /******************************** model ***********************************/
    self.cityList = ['BANGLORE', 'CHENNAI', 'DELHI', 'MUMBAI', 'PUNE'];
    self.selectedCity = 'MUMBAI';
    self.searchText = '';
    self.bankDetailsList = [];
    self.bankDetailsLoading = false;
    /***************************** controller **********************************/
    function initController(){
        onChangeCity();
    }
    
    function onChangeCity() {
        if (self.selectedCity) {
            resetVariables();
            self.bankDetailsLoading = true;
            bankSearchService.getBankList(self.selectedCity).then(function (bankList) {
                self.bankDetailsLoading = false;
                if (bankList && angular.isArray(bankList) === true) {
                    self.bankDetailsList = angular.copy(bankList);
                }
            }, function () {
                self.bankDetailsLoading = false;
            });
        }
    }

    function resetVariables() {
        self.searchText = '';
        self.bankDetailsList = [];
    }

    initController();
}]);