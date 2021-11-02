const forcast=require('../utiles/forcast')
const geo=require('../utiles/geocoding')
const express=require('express')
const app=express()
const path=require('path')
const hbs=require('hbs')
const port=process.env.PORT || 3000
// const res=path.join(__dirname,'../public')
// app.use(express.static(res))
app.use(express.static(path.join(__dirname, '../public')))
app.set('views', path.join(__dirname, '../views'));
let temp=0
let feeltemp=0

//used for setting the view folder in scope so we can use hbs pages
const viewsPath = path.join(__dirname, '../views');
app.set('view engine', 'hbs')

const partialPath = path.join(__dirname, '/templates/partials');
hbs.registerPartials(partialPath)
app.get('/',(req,res)=>{
    res.render('index', {root: viewsPath,	title: 'Weather', name: 'Rahul Jadli'})
    })
    
    app.get('/about',(req,res)=>{
        res.render('about', {root: viewsPath,	title: 'Weather', name: 'Rahul Jadli'})
        })
        
 app.get('/weather',(req,res)=>{
        
if(!req.query.location)
{
    return res.send({
        error:"please enter the loaction"
    })
}

else{
let res1={}
    geo.geocoding(req.query.location,(error,obj)=>{
       

    
           forcast.forcast(obj,(error,ans1)=>{
            
            if(ans1.code==404)
            return res.send({
                error:"Invalid Location"
            })
            res.send({
                location:req.query.location,
                temp:ans1.temp,
                feeltemp:ans1.feeltemp
            })
           } 
            )
        })
    

}

})

app.get('/weather',(req,res)=>{
    res.render('weather', {root: viewsPath,	title: 'Weather', name: 'RAHUL'})

    })

    app.get('*',(req,res)=>{
        res.send("Page not found")
        })
    



app.listen(port,()=>{
    console.log("Server up and running")
})

