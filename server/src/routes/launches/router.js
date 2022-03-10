const express = require('express');
const {HTTPgetLaunches, httpAddLaunch, httpAbortLaunch} =  require('./controller');

const launchRouter = express.Router();

launchRouter.get("/", HTTPgetLaunches);
launchRouter.post("/", httpAddLaunch);
launchRouter.delete("/:id", httpAbortLaunch);

module.exports = launchRouter;