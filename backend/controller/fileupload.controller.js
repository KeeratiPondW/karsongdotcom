const express = require('express')
const multer = require('multer')
const router = express.Router()
const {
    imageUpload,
    textUpload
} = require('../router/fileupload.router')

var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

router.post('/fileupload/text', upload.single('file'), textUpload)

router.post('/fileupload/image', upload.single('file'), imageUpload)

module.exports = router