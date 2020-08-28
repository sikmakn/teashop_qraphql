import React from "react";
import styles from './footer.module.scss';

const Footer: React.FC = () =>
    (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.addressContainer}>
                    <span className={styles.address}>проспект Существующий, 28</span>
                    <span className={styles.metro}>Минск, метро Октябрьская</span>
                </div>
                <div className={styles.contacts}>
                    <span className={styles.phone}>375 55 555 55 55</span>
                    <a href="mailto:teashop@teeachop.by">teashop@teeachop.by</a>
                    <a href="mailto:teaspace@teashop.by">teaspace@teashop.by</a>
                </div>
                <span className={styles.info}>
                    Интернет-магазин зарегистрирован в Торговом реестре РБ 22/10/2015 г.
                    ИП Клишевский Вадим Станиславович г. Минск, ул. Голубева, 22, корп.1,
                    кв.200. Св-во о регистрации №192236137 выдано 14.03.2014 г.
                </span>
                <div className={styles.socials}>
                    <a href=""><span className={styles.vk}/></a>
                    <a href=""><span className={styles.facebook}/></a>
                    <a href=""><span className={styles.instagram}/></a>
                </div>
            </div>
        </footer>
    );

export default Footer;