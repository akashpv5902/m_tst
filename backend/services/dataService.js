const db = require('./db')


const getProducts =()=>{
    return db.Product.find().then( 
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    products:result
                }
            }
            else{
                return{
                    status:false,
                    statusCode:404,
                    message:'No Product Found!'
                }
            }
        }

    )
}


const addtopurchase=(id,name,price,image,desc)=>{

    return db.wishlist.findOne({id}).then(
        (result)=>{
            if(result){
                return{
                    status:true,
                    statusCode:200,
                    message:"Product already exists"
                }
            }
            else{
                const newProduct = new db.wishlist({id,name,price,image,desc})
                newProduct.save()//to save data into mongodb

                return{
                    status:true,
                    statusCode:200,
                    message:"Product added to wish-list"
                }
            }
        }

    )
  
}


module.exports = {
    getProducts,

}