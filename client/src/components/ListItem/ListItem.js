import React from 'react';
import styles from './ListItem.module.sass';
import {connect} from "react-redux";
import CONSTANTS from "../../constants";
import {getSuperheroByIdAction} from "../../actions/actionCreator";

class ListItem extends React.Component {

    /**
     *
     * @description Creates superheroes list element
     * @return {JSX.Element} - Superheroes list element
     */
    renderProductItem = () => {
        const {id, SuperheroesPhotos, nickName} = this.props.data;
        const mainPhoto = SuperheroesPhotos.find( (item) => item.isMainPhoto === true);
        return (
            <button onClick={() => this.props.goToExtended(id)} className={styles.superheroMainContainer}>
                <div className={styles.descriptionContainer}>
                    <img src={ mainPhoto.photo === 'anonym.png' ? CONSTANTS.ANONYM_IMAGE_PATH
                        : `${CONSTANTS.publicPhotosURL}${mainPhoto.photo}` }
                         className={styles.superheroImage} alt='Superhero'/>
                    <span className={styles.title}>{nickName}</span>
                </div>
            </button>
        )
    };

    render()
    {
        return (
            <>
                {this.renderProductItem()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state.superheroByIdStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSuperheroById: (id) => dispatch(getSuperheroByIdAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);