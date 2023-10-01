Question

// Write a function named createServer that creates a simple HTTP server using the built-in http module. The server should listen on port 5500 and respond to all requests with a plain text response of "Hello This is Node Js Server!"

const http = require('http')

const createServer = http.createServer((req, res)=>{
res.end('<h1>Hello This is Node Js Server</h1>')
})

createServer.listen(5500, ()=>{
    console.log('server run success');
})