import React, {useState} from 'react';
import styles from './Form.module.sass';
import '../../assets/styles/react-confirm-alert.css';
import {connect} from 'react-redux';
import {Field, reduxForm, submit} from 'redux-form';
import {confirmAlert} from 'react-confirm-alert';
import {createSuperheroAction, updateSuperheroAction} from "../../actions/actionCreator";
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import CONSTANTS from "../../constants";
import Schemes from '../../validators/validationSchemes';
import ImageUploadInput from "../ImageUploadInput/ImageUploadInput";
import SuperHeroPhotosContainer from "../SuperHeroPhotosContainer/SuperHeroPhotosContainer";

const Form = ({handleSubmit, createSuperhero, updateSuperhero, createData, defaultData, isEdit, superheroId,
                  superheroData}) => {

    const [mainPhoto, setMainPhoto] = useState(null);
    const [filesList, setFilesList] = useState( [] );
    const [photosListForRemoved, setPhotosListForRemoved] = useState( [] );

    const handleUploadFile = (file) => {
        filesList.push(file);
        setFilesList(filesList);
    }

    const formInputClassNames = {
        container: styles.inputContainer,
        input: styles.input,
        valid: styles.valid,
        notValid: styles.notValid,
        warning: styles.fieldWarning
    };

    const onSubmit = (superheroData) => {
        confirmAlert({
            message: isEdit ? 'Are you sure wish to update Superhero?' : 'Are you sure wish to create new Superhero?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const data = new FormData();
                        Object.keys(superheroData).forEach(key => {
                            if (key !== 'file' && superheroData[key])
                                data.append(key, superheroData[key]);
                        });

                        if (filesList.length > 0) {
                            !isEdit && data.append('mainPhotoName', filesList[0].name)
                            filesList.map(el => {
                                data.append('file', el);
                            })
                        } else {
                            mainPhoto && data.append('mainPhotoName', mainPhoto)
                        }
                        data.append('photosListForRemoved', photosListForRemoved);
                        isEdit ? updateSuperhero(data, superheroId) : createData(data);
                        window.location.assign(CONSTANTS.HOME_URL);
                    }
                },
                {
                    label: 'Cancel',
                }]
        });
    };

    /**
     *
     * @description Handle onClick event on photos
     * @param {String} targetPhoto
     */
    const onClickHandler = (targetPhoto) => {
        confirmAlert({
            buttons: [
                {
                    label: 'Set as main photo',

                    /**
                     *  @description Sets the target picture as the main avatar.
                     *  And sets the common style to an existing main avatar in case of change it.
                     */
                    onClick: () => {
                        setMainPhoto(targetPhoto);
                        superheroData.superhero.SuperheroesPhotos.forEach( (photo) => {
                            if (photo.photo === targetPhoto) {
                                photo.isMainPhoto = true;
                            } else {
                                photo.isMainPhoto = false;
                            }
                        });
                    }
                },
                {
                    label: 'Delete photo',
                    onClick: () => {
                        photosListForRemoved.push(targetPhoto);
                        setPhotosListForRemoved(photosListForRemoved);
                        superheroData.superhero.SuperheroesPhotos =
                            superheroData.superhero.SuperheroesPhotos.filter( obj => obj.photo !== targetPhoto);
                    }
                },
                {
                    label: 'Cancel',
                }]
        });
    };

    return (
        <div className={styles.loginForm}>
            {
                isEdit &&
                <div>
                    <span className={styles.topFieldLabel}>You can change the main photo or delete some by clicking
                        on the picture</span>
                    <SuperHeroPhotosContainer superheroesPhotos={superheroData.superhero.SuperheroesPhotos}
                                              onClickHandler={onClickHandler}
                                              isEdit={true}/>
                </div>
            }

            <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                <span className={styles.fieldLabel}>What is the nickname of the superhero?</span>
                <Field
                    name='nickName'
                    classes={formInputClassNames}
                    component={FormInput}
                    type='text'
                    label='Nick name'
                />
                <span className={styles.fieldLabel}>What is the real name of the superhero?</span>
                <Field
                    name='realName'
                    classes={formInputClassNames}
                    component={FormInput}
                    type='text'
                    label='Real name'
                />
                <span className={styles.fieldLabel}>Describe the Superhero, please</span>
                <Field
                    name='originDescription'
                    classes={formInputClassNames}
                    component={FormInput}
                    type='text'
                    label='Origin description'
                />
                <span className={styles.fieldLabel}>What superpowers does the Superhero have?</span>
                <Field
                    name='superpowers'
                    classes={formInputClassNames}
                    component={FormInput}
                    type='text'
                    label='Superpowers'
                />
                <span className={styles.fieldLabel}>And what is catch phrase for the Superhero?</span>
                <Field
                    name='catchPhrase'
                    classes={formInputClassNames}
                    component={FormInput}
                    label='Catch phrase'
                />
                <Field
                    name='file'
                    component={ImageUploadInput}
                    filesList={filesList}
                    classes={{
                        uploadContainer: styles.imageUploadContainer,
                        inputContainer: styles.uploadInputContainer,
                        commonImgStyle: styles.commonImgStyle
                    }}
                    type='file'
                    onChange={handleUploadFile}
                    isEdit={isEdit}
                    multiple
                />

                <div className={styles.choseAnswerContainer}>
                    <button type='submit' className={styles.submitContainer}>
                        <span className={styles.submitButton}>
                            { isEdit ? "edit superhero page" : "create new superhero" }
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const {error, superheroData} = state.superheroByIdStore;
    return {
        error,
        superheroData,
        initialValues: ownProps.defaultData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateSuperhero: (newSuperheroData, id) => dispatch(updateSuperheroAction(newSuperheroData, id)),
        createData: (superheroData) => dispatch(createSuperheroAction(superheroData)),
        createSuperhero: () => dispatch(submit('eventForm')),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'eventForm',
    enableReinitialize : true,
    validate: customValidator(Schemes.SuperheroSchema)
})(Form));