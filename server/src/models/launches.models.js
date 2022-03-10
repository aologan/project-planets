const launches = new Map();


const launch = {
    upcoming : true,
    flightid : 101,
    mission: "Kepler Exploration Mission",
    location : 'florida',
    success : true,
    rocket:'kepler-22b',
    aborted :  false,

};

launches.set(launch.flightid, launch);

var lastflightid = launch.flightid;

function doesExist(id){
    return launches.has(id);
}


function getLaunches(){
    return Array.from(launches.values());
}

function getLastflightid(id){
    return launches.get(id);
}

function addLaunch(launchs){

    if(lastflightid==undefined){
        console.log("undefined flight id")
        lastflightid = 100 + 1;
    } else{
        lastflightid++;
    }

    launches.set(lastflightid, Object.assign(launchs, {
        success: true,
        upcoming: true,
        flightid: lastflightid,
        aborted :  false,
    }));
}


function abortLaunch(id){
    const flight = launches.get(id);
    flight.aborted = true;
    console.log(flight);
    return flight;
}

module.exports = 
{ getLaunches, 
    addLaunch,
doesExist,
abortLaunch,

};
