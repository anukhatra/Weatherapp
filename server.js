  
const express = require('express')
function getId(){
    return '_' + Math.random().toString(36).substr(2, 9);
};
const app = express()

app.use(express.json())
app.use(express.static('frontend'))
for (var i = 0; i < 5; i++) {
console.log(getId())
}

const weathers = [ 
    {
        title: 'Prague',
        location_type: 'City',
        id: '_04ihy7s5i',
        latt_long: '50.079079,14.433220'
    },
    {
        title: 'London',
        location_type: 'City',
        id: '_erpsdwola',
        latt_long: '51.506321,-0.12714'
    },
    {
        title: 'Sydney',
        location_type: 'City',
        id: '_ooa5kynav',
        latt_long: '-33.869629, 151.206955'
    },
    {
        title: 'Amsterdam',
        location_type: 'City',
        id: '_0c3v1tsd2',
        latt_long: '52.373119,4.893190'
    },
    {
        title: 'Mumbai',
        location_type: 'City',
        id: '_c2rwpuabs',
        latt_long: '19.076191,72.875877'
    },]


app.get("/weathers", (req , res) =>{
    res.json(weathers)
})

app.post("/weathers", (req , res) =>{
    let newWeather= req.body
    newWeather.id = getId()
    weathers.push(newWeather)
    res.json("New weather is added")
})
/* app.get("/weathers/:id", (req, res) => {
    const paramId = req.params.id
    const foundweather = weathers.find((weather) => weather.id == paramId )

    if (foundweather) {
        res.json(foundweather)
    } else {
        res.status(404).json({status: "Weather details not available"})
    }
})
 */


function checkExistance (req, res, next){
const paramId = req.params.id 
let findWeather = weathers.findIndex((weather) =>weather.id == paramId)
 
if(findWeather == -1){
res.status(404).json({status:"Weather information not available"})
 }else {
req.findWeather = findWeather
next()
 }
 
}
 

/* app.use((req, res)=>{
res.status(404).json(

 {
message:'Not available'
 })
}) */



app.listen(3000, 'localhost', () => {
    console.log('Server is up and running');
})

