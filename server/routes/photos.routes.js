const router = require('express').Router()
const {photoSend, allPhotos} = require("../controllers/photo.controller")

router.get('/api/photos', photoSend)
router.get('/api/photos/all', allPhotos)

module.exports = router