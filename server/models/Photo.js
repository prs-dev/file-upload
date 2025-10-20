const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    filename: String,
    path: String,
    uploadedAt: {
        type: Date,
        default: Date.now()
    },
    caption: String,
    size: Number
})

module.exports = mongoose.model("Photo", photoSchema)