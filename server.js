const express=require('express')
const app=express();

app.get('/',(req,res)=>{
    res.send('Hello World')
})

const port= 3001 || process.env.PORT

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})