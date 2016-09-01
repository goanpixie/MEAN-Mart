app.controller('homeController', ['$scope', '$location', 'userFactory', '$cookies',function($scope, $location, userFactory, $cookies) {


	$scope.newOrder = {};
    $scope.errors = false;
    $scope.messages = [];
    $scope.orders = {};
    $scope.products =[];
    $scope.customers = [];



    $scope.getCustomer = function() {
        userFactory.getCustomer(function(data) {
            $scope.customers = data
        })
    };
    $scope.getCustomer();


    $scope.getProduct = function() {
        userFactory.getProduct(function(data) {
            $scope.products = data
        })
    };
    $scope.getProduct();


    $scope.getOrder = function() {
        userFactory.getOrder(function(data) {
            $scope.orders = data
        })
    };
    $scope.getOrder();

}])