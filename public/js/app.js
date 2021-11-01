
const weatherForm=document.querySelector('form')
const mess1=document.querySelector('#mess1')
const mess2=document.querySelector('#mess2')

weatherForm.addEventListener("submit",(e)=>{
    const input=document.querySelector("input")
const location1=input.value

e.preventDefault()
fetch("/weather?location="+location1).then((response)=>{
response.json().then((data)=>{

    mess1.textContent="Loading..."
    
if(data.error){
    mess1.textContent="Invalid Location"
    
    }
else{
    mess1.textContent="Location:"+data.location
    mess2.textContent="Temp:"+data.temp

}



})
})
})