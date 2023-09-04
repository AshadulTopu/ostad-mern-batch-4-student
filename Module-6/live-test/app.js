const express = require('express')
const app = express()

// A) Creating a Simple String Response with Express.js
app.use('/data', (req, res)=>{
    res.send('Hello,Express JS!')
})


// B) Handling Different HTTP Response Status Codes in Express.js
app.use('/success', (req, res)=>{
    res.status(200)
    res.send('Site load success')
})
app.use('/notfound', (req, res)=>{
    res.status(404)
    res.send('404 data not found')
})


// C) Setting Cookies in Express.js
app.use('/', (req,res)=>{
    res.cookie("name","JohnDoe")
    res.cookie("language","en")
    res.cookie("theme","dark")
    res.end('set cookies success')
})


// D) Clearing Cookies in Express.js
app.use('/clearcookies', (req,res)=>{
    res.clearCookie("name")
    res.clearCookie("language")
    res.clearCookie("theme")
    res.end('clear cookies success')
})


app.listen(5000, ()=>{
    console.log('server run success on port 5000');
})