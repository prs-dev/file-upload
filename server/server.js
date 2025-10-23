const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const fs = require('fs')
require('dotenv').config()

const uploadRoutes = require("./routes/upload.routes")

const photoRoutes = require('./routes/photos.routes')

const app = express()

app.use(express.static(path.join(__dirname, '/uploads')))

app.use(photoRoutes)

app.use(uploadRoutes)

app.get("/", (req, res) => {
    res.status(200).send("hello from api")
})

// app.post("/api/upload", upload.single('photo'), )

// app.get('/api/photos', )

mongoose.connect(process.env.MONGO)
.then(() => {
    console.log('db connected')
})
.catch(err => {
    console.log(err)
})

app.listen(5000, () => {
    console.log("server listening at port 5000")
})