import React, {useState} from 'react';
import styles from './header.module.scss';
import {PATHS} from '../../constants';
import Search from "../search";
import CartMini from "../cartMini";
import Catalog from "../catalog";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    const [isActiveCatalog, setIsActiveCatalog] = useState(false);

    const catalogClickHandler = () => {
        setIsActiveCatalog(!isActiveCatalog);
    };

    return (
        <header>
            <div>
                <Link to={PATHS.HOME}><img className={styles.logo} src={`${process.env.PUBLIC_URL}/logo.svg`} alt="Teashop"/></Link>
                <div className={styles.catalog} onClick={catalogClickHandler}>
                    {
                        isActiveCatalog ?
                            <img src={`${process.env.PUBLIC_URL}/menu_active.svg`} alt="каталог"/> :
                            <img src={`${process.env.PUBLIC_URL}/menu.svg`} alt="каталог"/>
                    }
                    <span>Чайный каталог</span>
                </div>
                {isActiveCatalog && <Catalog/>}
                <span className={styles.phone}>375 33 604 11 77</span>
                <span className={styles.workTime}>с 10 до 21</span>
                <Link className={styles.delivery} to={PATHS.CATALOG}>Доставка и оплата</Link>
                <div className={styles.search}><Search/></div>
                <CartMini/>
            </div>
        </header>
    );
};

export default Header;