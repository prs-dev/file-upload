const path = require('path')
const fs = require('fs')

const photoSend = (req, res) => {
    const uploadDir = path.join(__dirname, "..", '/uploads')
    fs.readdir(uploadDir, (err, files) => {
        if (err) return res.status(500).json({ msg: "Error reading files" })
        const photoUrls = files.map(file => `/${file}`)
        res.json({ photos: photoUrls })
    })
}

// console.log(__dirname)

module.exports = {
    photoSend
}