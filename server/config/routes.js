console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){

	app.post('/add_customer', users.addCustomer)
	app.get('/get_customer', users.getCustomer)
	app.get('/remove_customer/:id',users.removeCustomer)
	app.post('/add_product', users.addProduct)
	app.get('/get_product', users.getProduct)
	app.post('/add_order', users.addOrder)
	app.get('/get_order', users.getOrder)


}
