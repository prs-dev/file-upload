const express = require('express')

const path = require('path')
const fs = require('fs')

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

app.listen(5000, () => {
    console.log("server listening at port 5000")
})