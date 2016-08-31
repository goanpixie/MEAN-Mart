console.log("Ia m in the model-->user.js")
var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({

_products:[{type: Schema.Types.ObjectId, ref :'Product'}],
  name : {
    type:String,
    required: [true, "First name is required"],
    trim: true,
    minlength: [6," First name must be atleast 2 letters"]
  }
}
,{timestamps:true})


  var User = mongoose.model('User', UserSchema)