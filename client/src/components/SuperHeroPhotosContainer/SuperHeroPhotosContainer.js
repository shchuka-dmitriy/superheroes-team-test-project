import React from 'react';
import CONSTANTS from "../../constants";
import styles from "./SuperHeroPhotosContainer.module.sass";
import PropTypes from 'prop-types';

const SuperHeroPhotosContainer = ({superheroesPhotos, isEdit, onClickHandler}) => {

    const onClick = (targetPhoto) => {
        onClickHandler(targetPhoto);
    };
    const onClickMainPhoto = () => {
        window.alert("Please, first reassign the main photo for edit!")
    };

    const renderSuperheroesPhotos = (superheroesPhotos) => {
        const notMainPhotosList = [];
        const setImgElem = (photo, index) => {
            return <img id={photo.id} key={index}
                        src={`${CONSTANTS.publicPhotosURL}${photo.photo}`}
                        className={photo.isMainPhoto ? styles.mainAvatar : styles.avatar}
                        onClick={ (isEdit && (photo.photo !== 'anonym98.png') )
                            ? (
                                (photo.isMainPhoto === true) ? (() => {onClickMainPhoto()}) :

                                (() => {onClick(photo.photo)})
                            )
                            : undefined }
                        alt='superhero'/>
        };
        let mainPhoto = null;

        superheroesPhotos.forEach( (photo, index) => {
            if (!photo.isMainPhoto) {
                notMainPhotosList.push(
                    setImgElem(photo, index)
                )
            } else (
                mainPhoto = setImgElem(photo, index)
            )
        });

        return (
            <div className={styles.photosContainer}>
                <div className={styles.mainPhotosContainer}>
                    {mainPhoto}
                </div>
                <div className={styles.notMainPhotosContainer}>
                    {notMainPhotosList}
                </div>
            </div>
        )
    }

    return (
        <>
            { renderSuperheroesPhotos(superheroesPhotos) }
        </>
    );
};

SuperHeroPhotosContainer.propTypes = {
    superheroesPhotos: PropTypes.array.isRequired,
    isEdit: PropTypes.bool,
    onClickHandler: PropTypes.func
};

export default SuperHeroPhotosContainer;