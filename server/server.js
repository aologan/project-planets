const http = require('http');
const path = require('path');

//locally import express function
const app  = require('./app');


const {loadPlanetData} = require('./src/models/planets.models')

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);


//async cannot be called on top level
//routers and models are called within a locally initiated top level async function
async function getData () {
    await loadPlanetData();
}
server.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`);
})



getData();
