const forcast=require('../utiles/forcast')
const geo=require('../utiles/geocoding')
const express=require('express')
const app=express()
const path=require('path')

const res=path.join(__dirname,'../public')
app.use(express.static(res))

let temp=0
let feeltemp=0







geo.geocoding('Dehradun',(error,obj)=>{
    

obj['error']=error



   const ans= forcast.forcast(obj,(error,obj)=>{
        console.log(obj)
    }
    )
    console.log(ans)
})

app.get('/weather',(req,res)=>{
    res.send("Welcome Rahul outside temp"+temp+"but feels like"+feeltemp)
    })


app.listen(3000,()=>{
    console.log("Server up and running")
})

