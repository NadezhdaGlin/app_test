const express = require('express')
const app = express()
const mysql = require('mysql2')

app.get("/", (req, res) => {
    res.send("Hello fucking world")
})


app.listen(3002, () => {
    console.log("Port listen 3002")
})