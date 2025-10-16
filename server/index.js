const express = require('express')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const app = express()
app.use(express.static(path.join(__dirname, '/uploads')))
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + '/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage })

app.get("/", (req, res) => {
    res.status(200).send("hello")
})

app.post("/api/upload", upload.single('photo'), (req, res) => {
    res.json({
        msg: "ok"
    })
    console.log("response", req.file)
})

app.get('/api/photos', (req, res) => {
    const uploadDir = path.join(__dirname, '/uploads')
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).json({ msg: "Error reading files" })
        const photoUrls = files.map(file => `/${file}`)
        res.json({ photos: photoUrls })
    })

})

app.listen(5000, () => {
    console.log("server listening at port 5000")
})