//express middle seperate from server fucntions

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const planetRouter = require('./src/routes/planets/router');
const launchRouter = require('./src/routes/launches/router');
const app = express();

//cors function implemted to allow cross origin call back between specfied servers
app.use(cors({
    origin : 'http:/localhost:8000',
}));
app.use(morgan('combine'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use("/planets", planetRouter); 
app.use("/launches",launchRouter);



app.get("/*", (req, res) =>{
    res.sendFile(path.join(__dirname, "..", "client", "public","index.html"));
});



module.exports = app; 