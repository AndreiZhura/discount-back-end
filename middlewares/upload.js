const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        const date = moment().format('DD.MM.YYYY-HH.mm.ss');
        cb(null, `${date}-${file.originalname}`)
  
    }
})
/*
const fileFilter = (req, file, cb) => {
    console.log(file)
    if (file.minetype === 'image/png' || file.minetype === 'image/jpeg' ||  file.minetype === 'image/jpg') {
        cb(null, false)
    }
    else {
        cb(null, true)
    }
}*/

const fileLimit = {
    fileSize: 1024 * 1024 * 5
}



module.exports = multer({storage,fileLimit})