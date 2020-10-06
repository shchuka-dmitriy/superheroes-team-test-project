import {Superhero, SuperheroesPhoto} from './../models';
import {ServerError} from "../utils/errors";
const fs = require('fs')

module.exports.createHero = (req, res, next) => {
    const superhero = req.body;
    const mainPhotoName = req.body.mainPhotoName;
    const photos = req.files;
    if (photos.length < 1) {
        photos.push({filename: "anonym98.png"});
    }
    
    Superhero.create({
            nickName: superhero.nickName,
            realName: superhero.realName,
            originDescription: superhero.originDescription,
            superpowers: superhero.superpowers,
            catchPhrase: superhero.catchPhrase
        }).then(savedSuperhero => {
        req.superhero = savedSuperhero.data;
        createPhotos(photos, savedSuperhero.dataValues.id, mainPhotoName, next)
    }).catch(err => {
        next(new ServerError(err))
    });
}

module.exports.deletePrevPhotos = (req, res, next) => {
    const removedPhotosArr = req.body.photosListForRemoved.split(',');
    if (removedPhotosArr) {
        removedPhotosArr.forEach(function (photo) {
            SuperheroesPhoto.destroy({
                where: {
                    photo: photo
                }
            }).then(removedSuperheroesPhoto => {
                if (removedSuperheroesPhoto.dataValues !== []) {
                    next();
                }
            }).catch(err => {
                next(new ServerError(err))
            });
        });
        next();
    } else {
        next();
    }
}

module.exports.updateHeroById = (req, res, next) => {
    const superhero = req.body;
    const mainPhotoName = req.body.mainPhotoName;
    const photos = req.files;
    const id = req.params.id;

    Superhero.update(superhero, {
        where: {
            id: req.params.id
        }, returning: true })
        .then(updatedSuperhero => {
            req.superhero = updatedSuperhero.data;
            if(req.files.length > 0) {
                createPhotos(photos, id, mainPhotoName, next)
            } else {
                if (mainPhotoName) {
                    try {
                        SuperheroesPhoto.update({isMainPhoto: false}, {
                            where: {
                                superheroId: id,
                                isMainPhoto: true
                            }
                        });
                        SuperheroesPhoto.update({isMainPhoto: true}, {
                            where: {
                                photo: mainPhotoName
                            }
                        })
                    } catch (err) {
                        next(new ServerError(err));
                    }
                }
                next();
            }
    }).catch(err => {
        next(new ServerError(err))
    });
}

const createPhotos = (photosArr, savedSuperheroId, mainPhotoName, next) => {
    photosArr.forEach(function (photo) {
        SuperheroesPhoto.create({
            superheroId: savedSuperheroId,
            photo: photo.filename,
            isMainPhoto: mainPhotoName === photo.originalname ? true : false
        }).then(savedSuperheroesPhoto => {
            if (savedSuperheroesPhoto.dataValues !== []) {
                next();
            }
        }).catch(err => {
            next(new ServerError(err))
        });
    });
}