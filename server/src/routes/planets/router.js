//router for planet models


const express =  require('express');
const { HTTPgetAllPlanets } = require('./planets.controller');

const planetRouter = express.Router();

planetRouter.get('', HTTPgetAllPlanets);

module.exports = planetRouter;