console.log("Ia m in the model-->product.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ProductSchema = new mongoose.Schema({
_customers: {type: Schema.Types.ObjectId, ref: 'Customer'},
  name : {
    type:String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [6," Product name must be atleast 6 letters"]
  },

  description: {
    type:String,
    required: [true, "Product description is required"],
    trim: true,
    minlength: [20,"Product description must be atleast 20 letters"]
  },

  quantity:{
  type: Number,
        min: [1, 'Atleast Product quantity of 1 is needed to place an order'],
        max: 12
  },
}
,{timestamps:true})


  var User = mongoose.model('Product', ProductSchema)
