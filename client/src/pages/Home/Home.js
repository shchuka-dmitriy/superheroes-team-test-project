import React from 'react';
import SuperheroesList from "../../components/SuperheroesList/SuperheroesList";
import styles from "./Home.module.sass"
import history from "../../browserHistory";

const Home = () => {

    const goToCreateHero = () => {
        history.push('/createHero');
    };

    return (
        <div className={styles.mainContainer}>
            <SuperheroesList/>
            <button onClick={goToCreateHero} className={styles.createButton}>
                create new superhero
            </button>
        </div>
    )
};

export default Home;