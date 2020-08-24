import React from 'react';
import styles from './mainBanner.module.scss';
import {PATHS} from "../../constants";

const MainBanner:React.FC = ()=>(
    <a className={styles.mainBanner} href={PATHS.CATALOG}>
        <img src="banner.png" alt=""/>
    </a>
);

export default MainBanner;