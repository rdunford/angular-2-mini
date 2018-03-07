angular.module('myApp').service('productsSrvc', function ($http) {
    // Showing two different ways to 
    this.getShoeData = function () {
        return $http.get('https://practiceapi.devmountain.com/products?category=shoes')
    };

    this.getSockData = function () {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/products?category=socks'
        });
    };
    
});

// axios({
//     method: 'POST',
//     url: 'asdfasdfasdf',
//     data: {
//         userID: this.state.userID
//     }
// }).then(resp => {

// })