const express = require('express')
const app = express()
const connection = require("./connection");

app.get("/con", (req, res) => {
    connection.query('SELECT name FROM disciplines', (err,results) =>
    {
        if (err) {
            console.log("error");
        } else {
            res.send(results)
        }

    })
    // res.send("Hello fucking world")
})
app.listen(3002, () => {
    console.log("Port listen 3002")
})