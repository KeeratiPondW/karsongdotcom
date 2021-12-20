const co = require('co')
const { client } = require("../config/ali-oss")
const { v4: uuidv4 } = require('uuid')

const imageUpload = (req, res) => {
    if (!req.file) {
        res.send("No image file!")
        return
    }
    if (req.file.mimetype !== "image/png" && "image/jpg" && "image/jpeg") {
        res.send("Accept only png/jpg file!")
        return
    }
    if (req.file.size > 5 * 1024 * 1024) {
        res.send("Image file must less than 5 MB!")
        return
    }
    const imageName = uuidv4() + "-" + req.file.originalname
    co(function* () {
        var result = yield client.put(`image_files/${imageName}`, req.file.buffer);
        res.status(200).json({ url: imageName })
    }).catch(function (err) {
        res.send(err)
    });
}

const textUpload = (req, res) => {
    // res.send(req.file)
    // co(function* () {
    //     var result = yield client.put('text_files/exp.txt', req.file.buffer);
    //     res.send(result)
    // }).catch(function (err) {
    //     res.send(err)
    // });
    res.send("Nothing!")
}

module.exports = {
    imageUpload,
    textUpload
}