const express = require('express')
const router = require('./src/Routes/api')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.use('/api', router)


// undefine route
app.use('*', (req, res)=>{
    res.status(404).json({status:"fail", data: "not found"})
})

module.exports = app