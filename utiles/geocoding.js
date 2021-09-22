const request=require('request')
const geocoding= (address,callback)=>{

    const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?proximity=30.3165,78.0322&access_token=pk.eyJ1IjoicmFodWxqYWRsaTE5IiwiYSI6ImNrdGp4czl4NzFnOWwyb3BldGJ6d2xuNWgifQ.lB5mjuVEXaeaNT96olfRLQ&limit=1"

    request({url:geoUrl,json:true},(error,response)=>{
        
        if(error){
            callback('Invalid Argument',{address:address,code:400})
        }
        else if(response['body'].features.length==0){
            
            callback('No result found',{address:address,code:404})
        }else
        { 
           let lat=response['body'].features[0].center[1]
        let long=response['body'].features[0].center[0]
            callback( undefined,{lat:lat,
            long:long,
        place:response['body'].features[0].place_name,
    code:200 })
            }   
 })
}

module.exports={geocoding:geocoding}