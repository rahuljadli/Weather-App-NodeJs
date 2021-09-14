const request=require('request')

const url="http://api.weatherstack.com/current?access_key=5fe5ff8750b1b4b7ed9b08793f649aa8&query=Dehradun"

// request({url:url,json:true},(error,response)=>{
//     let responseJson=response['body']

//     console.log(responseJson)
// })

// Using GeoCoding to find lat and log then can be passed to request


const geoUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/Dehradun.json?proximity=30.3165,78.0322&access_token=pk.eyJ1IjoicmFodWxqYWRsaTE5IiwiYSI6ImNrdGp4czl4NzFnOWwyb3BldGJ6d2xuNWgifQ.lB5mjuVEXaeaNT96olfRLQ&limit=1"


request({url:geoUrl,json:true},(error,response)=>{
    let lat=response['body'].features[0].center[1]
    let long=response['body'].features[0].center[0]

    console.log(lat+' '+long)
})
