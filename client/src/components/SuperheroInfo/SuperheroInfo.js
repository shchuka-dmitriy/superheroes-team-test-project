import React from 'react';
import styles from './SuperheroInfo.module.sass';
import SuperHeroPhotosContainer from "../SuperHeroPhotosContainer/SuperHeroPhotosContainer";

const SuperheroInfo = (props) => {

    const {superheroData} = props;
    const {SuperheroesPhotos, nickName, realName, originDescription, superpowers, catchPhrase} = superheroData.superhero;
    return (
        <div className={styles.mainContainer}>
            <SuperHeroPhotosContainer superheroesPhotos={SuperheroesPhotos}/>
            <div className={styles.infoContainer}>

                <div className={styles.infoBlock}>
                    <span className={styles.label}>Nick name</span>
                    <span className={styles.info}>{nickName}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.label}>Real name</span>
                    <span className={styles.info}>{realName}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.label}>Original description</span>
                    <span className={styles.info}>{originDescription}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.label}>Superpowers</span>
                    <span className={styles.info}>{superpowers}</span>
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.label}>Catch phrase</span>
                    <span className={styles.info}>{catchPhrase}</span>
                </div>

            </div>
        </div>
    )
};

export default SuperheroInfo;