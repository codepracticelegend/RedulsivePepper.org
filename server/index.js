const express = require('express')
const app = express()

app.use("/", (req, res) => {

res.send("Server Is Currently Running.");

})

app.listen(5000, console.log("Server has currently started."));