const router = require('express').Router()
const {photoSend} = require("../controllers/photo.controller")

router.get('/api/photos', photoSend)

module.exports = router