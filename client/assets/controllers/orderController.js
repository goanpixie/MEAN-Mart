app.controller('orderController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {

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




}])