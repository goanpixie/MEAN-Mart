var app = angular.module('MEAN_Mart', ['ngRoute','ngCookies'])
app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })

        .when('/addCustomer', {
            templateUrl: 'partials/addCustomer.html',
            controller: 'customerController'
        })

        .when('/addOrder', {
            templateUrl: 'partials/addOrder.html',
            controller: 'orderController'
        })

        .when('/addProduct', {
            templateUrl: 'partials/addProduct.html',
            controller: 'productController'
        })
        
        .otherwise({
            redirectTo:'/home'
        })
})