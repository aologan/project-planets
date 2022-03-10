
const { parse }= require('csv-parse');
const fs = require('fs');
const path = require('path');

const results = [];
const habitable_planets = [];


//a function to filter out habitable planets, 
function isHabitable(planet){
    return planet['koi_disposition'] === 'CONFIRMED'
    && planet['koi_insol'] >0.36 && planet['koi_insol'] < 1.11 
    && planet['koi_prad'] < 1.6;
    
}

function loadPlanetData() {
//parse stream to returns key value pairs of csv data
return new Promise((resolve, response) => {
    fs.createReadStream(path.join(__dirname, '..', '..', 'data', 'kepler_data.csv')).pipe(
    parse(
        {comment: '#', 
        columns: true}))

    .on('data', (data) =>  {
        if(isHabitable(data)){
            habitable_planets.push(data);}
    })  
    .on('error', (err)=> {
        console.log(err);  
    })
    .on('end', () => {
        console.log(`We found ${habitable_planets.length} habitable planets`);
        resolve();
    });
  
 });

}


function getPlanets(){
    loadPlanetData();
    return habitable_planets;
}




module.exports = {
    loadPlanetData,
    getPlanets, 
};
