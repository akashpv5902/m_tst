const express = require("express")
const cors = require('cors');

const mongoose = require("mongoose")

const dotenv = require("dotenv")

const dataService = require('./services/dataService')

dotenv.config()
const products = require('./products')


const app =express()


app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/Credot',()=>{
    console.log('connected to mongoDB');
})


app.get("/",(req,res)=>{
    res.send("welcome to api...")
})


app.get("/products",(req,res)=>{
    res.send(products);
})

// api to get all products

app.get('/all-products',(req,res)=>{
    dataService.getProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

// api to get wish list items

app.post('/addtopurchase',(req,res)=>{
    dataService.addtowishlist(req.body.id,req.body.name,req.body.price,req.body.image,req.body.desc,).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

const port = process.env.PORT || 5000





app.listen(port, console.log(`server running on port ${port}`))










