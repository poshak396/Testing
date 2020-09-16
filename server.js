const express=require('express')
const app=express();


app.use(express.static(__dirname))
console.log(__dirname)

app.get('/',(req,res)=>{
    res.render('index.html')
})

const port= 3000 || process.env.PORT

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`)
})