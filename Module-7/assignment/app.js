const express = require('express')
const route = require('./src/Routers/api')
const app = express();

//import security middleware
const rateLimit = require('express-rate-limit')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const hpp = require('hpp')
const cors = require('cors')


//implement security middleware
app.use(helmet())
app.use(mongoSanitize())
app.use(hpp())
app.use(cors())

// request rate limit
const limiter = rateLimit({
    windowMs: 15*60*1000,
    max:100
})

app.use(limiter)



app.use('/', route)

// undefine route
app.use('*', (req, res)=>{
    res.status(404).json({status:"fail", data: "not found"})
})

module.exports = app