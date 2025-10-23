const Photo = require("../models/Photo")
const photoUpload = async(req, res) => {
    try {
        const photo = new Photo({
            filename: req.file.filename,
            path: req.file.path,
            size: req.file.size,
            caption: req.body.caption || ''
        })
        await photo.save()
        res.status(200).json({success: true, photo})
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }
    // res.status(200).json({
    //     msg: "photo uploaded"
    // })
    // console.log("response", req.file)
}
module.exports = {
    photoUpload
}