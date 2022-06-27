
const express=require('express')
const app=express()
const cors=require('cors')

const {db,Item} = require('../db/db.js')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('/home/aditya/Desktop/WEB-TryOuts/Grocery/frontend'))

app.get('/items',async (req,res)=>{
    const item= await Item.findAll()
    console.log(item)
    res.json(item)
})

app.post('/item',async (req,res)=>{
    const newItem=await Item.create({
        name:req.body.name

    })
    res.json({success:true})
})

db.sync().then(()=>{
    app.listen(3232,(err)=>{
    
        if(err)
        throw err
        
        console.log("Server started at port:3232")
    
    })
}).catch((err)=>{
    throw err 
})
