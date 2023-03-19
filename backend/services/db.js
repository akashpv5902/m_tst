const mongoose = require('mongoose')



const Product = mongoose.model('Product',{
    id:Number,
    name:String,
    desc:String,
    price:Number,
    image:String
})


const purchase = mongoose.model('Purchase',{
    id:Number,
    name:String,
    desc:String,
    price:Number,
    image:String
})


module.exports ={
    Product,
    purchase
}