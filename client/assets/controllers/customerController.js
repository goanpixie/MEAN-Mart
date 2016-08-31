app.controller('customerController', ['$scope', '$location', 'userFactory', '$cookies', function($scope, $location, userFactory, $cookies) {

    $scope.newCustomer = {};
    $scope.errors = false;
    $scope.messages = [];

    $scope.addCustomer = function() {

        userFactory.addCustomer($scope.newCustomer, function(data) {
            $scope.messages = []
            if (data.errors) {
                $scope.errors = true;
                for (err in data.errors) {
                    console.log(data.errors[err].message)
                    $scope.messages.push(data.errors[err].message)
                }
            } else {
                $cookies.putObject('newCustomer', { name: data.name, _id: data._id })
                $scope.getCustomer();
                $scope.newCustomer = null
            }
        })
    }

    $scope.getCustomer = function() {
        userFactory.getCustomer(function(data) {
            $scope.customers = data
        })
    };
    $scope.getCustomer();


    $scope.removeCustomer = function(id) {
    	console.log("I am @front end Controller")
        userFactory.removeCustomer(id, function() {
            $scope.getCustomer();
        })
    }


}])
