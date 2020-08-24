import React, {useState} from 'react';
import styles from './header.module.scss';
import {PATHS} from '../../constants';
import Search from "../search";
import CartMini from "../cartMini";
import Catalog from "../catalog";

const Header: React.FC = () => {
    const [isActiveCatalog, setIsActiveCatalog] = useState(false);

    const catalogClickHandler = () => {
      setIsActiveCatalog(!isActiveCatalog);
    };

    return (
        <header>
            <div>
                <img className={styles.logo} src="./logo.svg" alt="Teashop"/>
                <div className={styles.catalog} onClick={catalogClickHandler}>
                    {
                        isActiveCatalog ?
                            <img src="./menu_active.svg" alt="каталог"/> :
                            <img src="./menu.svg" alt="каталог"/>
                    }
                    <span>Чайный каталог</span>
                </div>
                {isActiveCatalog && <Catalog/>}
                <span className={styles.phone}>375 33 604 11 77</span>
                <span className={styles.workTime}>с 10 до 21</span>
                <a className={styles.delivery} href={PATHS.CATALOG}>Доставка и оплата</a>
                <div className={styles.search}><Search/></div>
                <CartMini/>
            </div>
        </header>
    );
};

export default Header;