console.log("My Node app is starting");
 
const express = require('express')
const app = express()
const port = 3000
 
app.get("/", (req, res, next) => {
    console.log("I received a get request on the path // ")
    res.send('<h1 style="color:blue;">Hello World !!</h1>')
})
 
 
app.listen(port, () => {
  console.log(`Node js app is listening on port ${port}`)
})