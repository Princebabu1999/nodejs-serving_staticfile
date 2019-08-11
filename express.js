//serving file with express
const express=require('express')
const path=require('path')
const app=express()
app.use(express.static(path.join(__dirname,"file.txt")))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'file.txt'))
}).listen(4000)