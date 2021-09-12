const request=require('request')

const url="http://api.weatherstack.com/current?access_key=5fe5ff8750b1b4b7ed9b08793f649aa8&query=Dehradun"

request({url:url},(error,response)=>{
    let responseJson=JSON.parse(response['body'])

    console.log(responseJson)
})