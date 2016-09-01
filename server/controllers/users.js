var mongoose = require('mongoose')
var User = mongoose.model('User')
var Product = mongoose.model('Product')
var Order = mongoose.model('Order')


console.log("I am at the users Controller-Backend")

function UsersController() {

    this.addCustomer = function(req, res) {
        User.findOne({ name: req.body.name, id: req.body._id }, function(err, customer) {
            if (err) {
                res.json(err)
            } else {
                if (customer == null) {
                    var newCustomer = User({ name: req.body.name })
                    newCustomer.save(function(newerr) {
                        if (newerr) {
                            res.json(newerr)
                        } else {
                            res.json(newCustomer)
                        }
                    })
                } else { res.json(customer) }
            }


        })
    }


    this.getCustomer = function(req, res) {
        User.find({}).populate('_user').exec(function(err, customers) {
            if (err) {
                res.json(err)
            } else {
                res.json(customers)
            }
        })
    }

    this.removeCustomer =function(req,res) {
        User.remove({_id:req.params.id}, function(err,customer) {
            if(err){
                res.json(err)
            }
            else{
                res.send()
            }

        })
    }

    this.addProduct = function(req,res) {
    Product.findOne({ name: req.body.name, id: req.body._id , description: req.body.description, quantity: req.body.quantity}, function(err, product) {
        if (err) {
            res.json(err)
        } else {
            if (product == null) {
                var newProduct= Product({ name: req.body.name, id: req.body._id , description: req.body.description, quantity: req.body.quantity })
                newProduct.save(function(newerr) {
                    if (newerr) {
                        res.json(newerr)
                    } else {
                        res.json(newProduct)
                    }
                })
            } else { res.json(product) }
            }
        })
    }




    this.getProduct = function(req, res) {
        Product.find({}).populate('_product').exec(function(err, products) {
            if (err) {
                res.json(err)
            } else {
                res.json(products)
            }
        })
    }


    this.addOrder = function(req, res) {
        console.log(req)
        Order.findOne({ customer: req.body.customer, id: req.body._id , product: req.body.product, quantity: req.body.quantity}, function(err, order) {
            if (err) {
                res.json(err)
            } else {
                if (order == null) {
                    var newOrder= Order({ customer: req.body.customer, id: req.body._id , product: req.body.product, quantity: req.body.quantity})
                    newOrder.save(function(newerr) {
                        if (newerr) {
                            res.json(newerr)
                        } else {
                            res.json(newOrder)
                        }
                    })
                } else { res.json(order) }
            }
        })
    }

    this.getOrder = function(req, res) {
        Order.find({}).populate('_order').exec(function(err, orders) {
            if (err) {
                res.json(err)
            } else {
                res.json(orders)
            }
        })
    }
}



module.exports = new UsersController();
