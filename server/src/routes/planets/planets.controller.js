const {getPlanets} = require('../../models/planets.models');

function HTTPgetAllPlanets(req, res){
    return res.status(200).json(getPlanets());
}


module.exports = {
    HTTPgetAllPlanets,
};