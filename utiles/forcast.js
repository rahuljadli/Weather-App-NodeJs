
const request=require('request')


const forcast= (obj,callback)=>{
        if(obj.code==400){
            callback(obj.code,obj) 
   }
    else if(obj.code==404){
        callback(obj.code,obj) 
     
    }else{
        const gurl="http://api.weatherstack.com/current?access_key=5fe5ff8750b1b4b7ed9b08793f649aa8&query="+obj.lat+","+obj.long
        

        request({url:gurl,json:true},(error,response)=>{

            
            if(error){
                
        console.log(error)
            }
            else
            {
                
         let temp=response.body.current.temperature
          let feeltemp=response.body.current.feelslike
                callback( undefined,{
                    temp:temp,
                    feeltemp:feeltemp,
            code:200 
                   }               )     
              }
            }
        )
    }
}

module.exports={
    forcast:forcast
}