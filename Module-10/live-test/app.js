const express = require("express");
const app = express();const helmet = require('helmet');
require("dotenv").config();
const morgan = require("morgan");
const cors = require('cors');
const router = require('./src/routes/api');





// middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())


app.use('/api', router)


app.use('*', (req, res)=>{
    res.status(404).json({status:"fail", data: "not found"})
})

module.exports = app;