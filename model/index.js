const mongoose=require('mongoose')
let  BookSchame={name:String,price:Number}
let Customer={name:String,age:Number}

mongoose.model("Book",BookSchame)
mongoose.model("Customer",Customer)