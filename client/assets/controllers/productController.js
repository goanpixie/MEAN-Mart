app.controller('productController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {

    $scope.newProduct = {};
    $scope.errors = false;
    $scope.messages = [];
    $scope.products = {};


    if ($cookies.getObject('newCustomer')) {
        $scope.newCustomer = $cookies.getObject('newCustomer')
    } else {
        $location.url('/')
    }

    $scope.addProduct = function() {

        userFactory.addProduct($scope.newProduct, function(data) {
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

            $scope.getProduct();
    }


    $scope.getProduct = function() {
        userFactory.getProduct(function(data) {
            $scope.products = data
        })
    };
    $scope.getProduct();





}])
