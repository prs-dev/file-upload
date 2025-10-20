const photoUpload = (req, res) => {
    res.status(200).json({
        msg: "photo uploaded"
    })
    // console.log("response", req.file)
}
module.exports = {
    photoUpload
}