import React from 'react';
import {connect} from 'react-redux';
import styles from './SuperheroPage.module.sass';
import CONSTANTS from '../../constants';
import TryAgain from '../../components/TryAgain/TryAgain';
import {
    getSuperheroByIdAction,
    deleteSuperheroAction,
    getSuperheroesAction
} from "../../actions/actionCreator";
import BackButton from "../../components/BackButton/BackButton";
import SuperheroInfo from "../../components/SuperheroInfo/SuperheroInfo";
import Spinner from '../../components/Spinner/Spinner';
import Form from "../../components/Form/Form";

class SuperheroPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false
        }
    }

    componentDidMount() {
        this.getData();
    }

    /**
     *
     * @description Get new superheroes data from server
     */
    getData = () => {
        const {params} = this.props.match;
        this.props.getSuperheroById(params.id);
    };

    /**
     *
     * @description Delete superhero
     * @param {Class} superhero
     */
    deleteCurrentEvent = (superhero) => {
        if ( window.confirm('Are you sure wish to delete this Superhero?') ) {
            this.props.deleteSuperhero(superhero.currentTarget.id);
            this.props.getSuperheroes();
            window.location.assign(CONSTANTS.HOME_URL);
        }
    };

    /**
     *
     * @description Set view mode between Display and Edit superhero
     */
    changeViewMode = () => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }

    /**
     *
     * @description Get default data about superhero for Edit page
     */
    getSuperheroObjInfo = () => {
        const {nickName, realName, originDescription, superpowers, catchPhrase,
            SuperheroesPhotos} = this.props.superheroByIdStore.superheroData.superhero;
        const photosArr = [];
        const photo = photosArr[0];
        const defaultData = {};
        const data = {
            nickName,
            realName,
            originDescription,
            superpowers,
            catchPhrase,
            photo
        };
        SuperheroesPhotos.forEach( (photo) => {
            photosArr.push(photo.photo)
        })

        Object.keys(data).forEach((key) => {
            if (data[key]) {
                if (key === 'photo') {
                    defaultData.file = {name: data[key]};
                } else {
                    defaultData[key] = data[key];
                }
            }
        });
        return defaultData;
    };

    render() {
        const {isEdit} = this.state;
        const {superheroByIdStore, match: {params: {id}}, error} = this.props;
        const {superheroData, isFetching} = superheroByIdStore;

        return (
            <div>
                {error ? <div className={styles.tryContainer}><TryAgain getData={this.getData}/></div> :
                    (
                        isFetching ?
                            <div className={styles.containerSpinner}>
                                <Spinner/>
                            </div>
                            :
                            <div className={styles.mainInfoContainer}>
                                <div className={styles.backButtonsContainer}>
                                    <BackButton/>
                                    <div>
                                        <button id={id} onClick={this.deleteCurrentEvent} className={styles.buttonEdit}>
                                            Delete
                                        </button>
                                        <button onClick={this.changeViewMode} className={styles.buttonEdit}>
                                            { isEdit ? "Cancel" : "Edit"  }
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.mainContainerWrapper}>

                                    {
                                        isEdit ? <Form defaultData={this.getSuperheroObjInfo()}
                                                       superheroId={superheroData.superhero.id}
                                                       isEdit={isEdit}
                                                 />
                                            :
                                            <div className={styles.infoContainer}>
                                                <SuperheroInfo superheroData={superheroData} superheroId={id}/>
                                            </div>
                                    }
                                </div>
                            </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {superheroByIdStore} = state;
    return {superheroByIdStore};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSuperheroes: () => dispatch(getSuperheroesAction()),
        getSuperheroById: (id) => dispatch(getSuperheroByIdAction(id)),
        deleteSuperhero: (id) => dispatch(deleteSuperheroAction(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroPage);