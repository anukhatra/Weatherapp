window.addEventListener('load', forcast)

async function forcast(){
    const result = await fetch('/weathers')
    const weathers = await result.json()
    console.log(weathers)
    let contant = document.getElementById("result")
    weathers.forEach(weather => {      
        let div = document.createElement("div")
        let ul = document.createElement("ul")      
        ul.className='ul';     

        let x = document.createElement("li")        
        x.className='li';
        let y = document.createElement("li")
        y.className='li';
        let z = document.createElement("li")
        z.className='li';

        x.innerText=weather.title
        y.innerText=weather.location_type
        z.innerText=weather.latt_long
      

        ul.appendChild(x)
        ul.appendChild(y)
        ul.appendChild(z)     
        div.appendChild(ul)
        contant.appendChild(div)  

    });
}

function getAll(){
    console.log("getall")
    makeRequest("/weathers", "get")
}

function addWeather(){
    console.log("i m in addweather")    
    var title = document.getElementById("title").value;
    var location_type = document.getElementById("location").value;
    var latt_long = document.getElementById("latt").value;

    let body = {
       
        title:title,
        location_type:location_type,
        latt_long:latt_long
        
    }
    makeRequest("/weathers/", "post", JSON.stringify(body))
}

async function makeRequest(url , reqmethod, body){
    const response = await fetch(url, {
        headers: {"content-type": "application/json"},
        method: reqmethod,
        body: body
    })
    console.log(response)
    location.reload()
    const data = await response.json()
    console.log(data)
        return data
    
}