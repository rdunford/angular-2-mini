angular.module('myApp').controller('productsCtrl', function ($scope, $stateParams, productsSrvc) {

    if ($stateParams.id === 'shoes') {
        productsSrvc.getShoeData().then(function (resp) {
            $scope.productData = resp.data;
        });
    }
    else if ($stateParams.id === 'socks') {
        productsSrvc.getSockData().then(resp => {
            $scope.productData = resp.data;
        })
    }


})