const fs = require('fs');
const path = require('path');
const multer = require('multer');
const ServerError = require('./errors/index');
const env = process.env.NODE_ENV || 'development';
const devFilePath = path.resolve(__dirname, '..', '..', 'public/photos');

const filePath = env === 'production'
  ? '/var/www/html/photos/'
  : devFilePath;

if (!fs.existsSync(filePath)) {
  fs.mkdirSync(filePath, {
    recursive: true,
  });
}

const storageContestFiles = multer.diskStorage({
  destination (req, file, cb) {
    cb(null, filePath);
  },
  filename (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const uploadAvatars = multer({ storage: storageContestFiles }).any('file');

module.exports.uploadAvatar = (req, res, next) => {
  uploadAvatars(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      next(new ServerError());
    } else if (err) {
      next(new ServerError());
    }
    return next();
  });
};

module.exports.deletePhotos = (req, res, next) => {
  if (req.body.photosListForRemoved) {
    const photoArrForDeleteFromServer = req.body.photosListForRemoved.split(',');
    photoArrForDeleteFromServer.forEach( (photo) => {
      const photoPath = path.resolve(filePath, photo);
      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(photoPath)
        } catch(err) {
          next(new ServerError(err));
        }
      }
    })
  }
  return next();
}