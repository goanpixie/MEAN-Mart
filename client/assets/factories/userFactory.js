app.factory('userFactory', ['$http', function($http) {
    function userFactory() {


        this.addCustomer = function(customer, callback) {
            console.log("I am in factory" + customer)
            $http.post('/add_customer', customer).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getCustomer = function(callback) {
            $http.get('/get_customer').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

        this.removeCustomer = function(id, callback){
			$http.get('/remove_customer/'+id).then(function(){
				callback()
			})
		}

		this.addProduct = function(product, callback) {
            console.log("I am in addProduct method-->factory" + product)
            $http.post('/add_product', product).then(function(r_data) {
                callback(r_data.data)
            })
        }


        this.getProduct = function(callback) {
            $http.get('/get_product').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }

        this.addOrder = function(order,callback) {
        	console.log("I am in addOrder method-->factory" + order)
        	$http.post('/add_order',order).then(function(r_data){
        		console.log(r_data)
        		callback(r_data.data)
        	})
        }

        this.getOrder = function(callback) {
            $http.get('/get_order').then(function(r_data) {
                console.log(r_data)
                callback(r_data.data)
            })

        }







    }

    return new userFactory();
}])
