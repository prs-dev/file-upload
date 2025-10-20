const router = require('express').Router()
const {photoUpload} = require("../controllers/upload.controller")
const upload = require('../config/multerConfig')

router.post('/api/upload',upload.single('photo'), photoUpload)
module.exports = router