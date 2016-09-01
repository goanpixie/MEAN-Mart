console.log("Ia m in the model-->order.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var OrderSchema = new mongoose.Schema({
_customers: {type: Schema.Types.ObjectId, ref: 'Customer'},
_products: {type: Schema.Types.ObjectId, ref: 'Product'},

customer : {
    type:String,
    required: [true, "Customer name is required"],
    trim: true,
    minlength: [6," Customer name must be atleast 6 letters"]
  },

product : {
    type:String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [6," Product name must be atleast 6 letters"]
  },

quantity:{
type: Number,
    min: [1, 'Atleast Product quantity of 1 is needed to place an order'],
    max: 20
},
}
,{timestamps:true})


 var Order = mongoose.model('Order', OrderSchema)