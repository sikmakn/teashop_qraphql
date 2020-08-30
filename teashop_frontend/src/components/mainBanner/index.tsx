import React from 'react';
import styles from './mainBanner.module.scss';
import {PATHS} from "../../constants";
import {Link} from "react-router-dom";

const MainBanner: React.FC = () => (
    <Link className={styles.mainBanner} to={PATHS.CATALOG}>
        <img src={`${process.env.PUBLIC_URL}/banner.png`} alt=""/>
    </Link>
);

export default MainBanner;