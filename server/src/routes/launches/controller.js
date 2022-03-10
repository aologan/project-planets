const {getLaunches, addLaunch, abortLaunch, doesExist} = require("../../models/launches.models");


function HTTPgetLaunches(req, res){
    return res.status(200).json(getLaunches());
};


function httpAddLaunch(req, res){
    const launch = req.body;
    if(!launch.mission || !launch.location || !launch.launchDate){
        return res.status(400).json({
            error: 'Missing required launch property',
            mission : launch.mission,
            location: launch.location,
            launchDate : launch.launchDate

        });
    }
    launch.launchDate = new Date(launch.launchDate);
    if( isNaN(launch.launchDate)){
        return res.status(401).json({
            error: 'Invalid date format',
        });
    }
    addLaunch(launch);


}



function httpAbortLaunch(res, req){
    let id = Number(res.params.id);

    if(!doesExist(id)){
        return res.status(404).json({
            message : `failed ID# ${id} does not exist`,
        });
    }

    var flight = abortLaunch(id);
    return res.status(200).json(flight);
    

}


module.exports = {
    HTTPgetLaunches,
    httpAddLaunch,
    httpAbortLaunch,
};