import React from 'react';
import {connect} from 'react-redux';
import styles from './SuperheroesList.module.sass';
import {getSuperheroesAction} from "../../actions/actionCreator";
import ListItem from "../ListItem/ListItem";
import Spinner from '../../components/Spinner/Spinner';
import TryAgain from '../../components/TryAgain/TryAgain';
import history from "../../browserHistory";
import classNames from 'classnames';

class SuperheroesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            limit: 5,
            offset: 0
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
        this.props.getSuperheroes(Object.assign({}, {
            limit: this.state.limit,
            offset: this.state.offset
        }));
    };

    prevButtonHandler = () => {
        if (this.state.offset > 0) {
            this.setState({
                offset: --this.state.offset
            });
            this.getData();
        }
    };

    nextButtonHandler = () => {
        if (this.props.superheroes.length >= 5) {
            this.setState({
                offset: ++this.state.offset
            });
            this.getData();
        }
    };

    /**
     *
     * @description Redirect to the Superhero info page
     * @param {Number} superhero_id
     */
    goToExtended = (superhero_id) => {
        history.push('/superhero/' + superhero_id);
    };

    /**
     * @description Create list of html elements (products)
     * @return {html[]}
     */
    setProductsList = () => {
        const { superheroes } = this.props;
        return [...superheroes.values()].map(superhero =>
            <ListItem id={superhero.id} key={superhero.id + 1} data={superhero} goToExtended={this.goToExtended}/>)
    };

    render() {
        const { error, isFetching, haveMore } = this.props;

        return (
            <>
                <div className={styles.mainInfoContainer}>
                    {error ? <div className={styles.tryContainer}><TryAgain getData={this.getData}/></div> :
                        (
                            <div className={styles.superheroesContainerWrapper}>
                                <button className={ classNames(styles.paginationButton,
                                        this.state.offset === 0 && styles.notActive) }
                                        onClick={this.prevButtonHandler}>prev</button>
                                    {
                                        isFetching
                                        ?   <div className={styles.containerSpinner}>
                                                <Spinner/>
                                            </div>
                                        :
                                            <div className={styles.superheroesContainer}>
                                                {this.setProductsList()}
                                            </div>
                                    }
                                 <button className={classNames(styles.paginationButton, !haveMore && styles.notActive)}
                                         onClick={this.nextButtonHandler}>next</button>
                            </div>
                        )
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return state.superheroesStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSuperheroes: (data) => dispatch(getSuperheroesAction(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SuperheroesList);