const multer = require('multer')
const path = require('path')
const uploadPath = path.join(__dirname, "..", '/uploads')
// console.log(uploadPath)
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({storage})
module.exports = upload

