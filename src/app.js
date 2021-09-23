const forcast=require('../utiles/forcast')
const geo=require('../utiles/geocoding')
const express=require('express')
const app=express()
const path=require('path')

// const res=path.join(__dirname,'../public')
// app.use(express.static(res))

app.set('views', path.join(__dirname, '../views'));
let temp=0
let feeltemp=0

//used for setting the view folder in scope so we can use hbs pages
const viewsPath = path.join(__dirname, '../views');
app.set('view engine', 'hbs')



app.get('/',(req,res)=>{
    res.render('index', {root: viewsPath,	title: 'Weather', name: 'RAHUL'})
    })
    



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

