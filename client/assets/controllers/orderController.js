app.controller('orderController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {

    $scope.newOrder = {};
    $scope.errors = false;
    $scope.messages = [];
    $scope.orders = {};


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

    $scope.addOrder = function() {
        userFactory.addOrder($scope.newOrder, function(data) {
            console.log(data)
            $scope.messages = []
            if (data.errors) {
                $scope.errors = true;
                for (err in data.errors) {
                    console.log(data.errors[err].message)
                    $scope.messages.push(data.errors[err].message)
                }
            }
        })
        	$scope.getOrder();
        	
    }

    $scope.getOrder = function() {
        userFactory.getOrder(function(data) {
            $scope.orders = data
        })
    };
    $scope.getOrder();

}])
