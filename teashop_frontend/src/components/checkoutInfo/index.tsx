import React from "react";
import styles from './checkoutInfo.module.scss';

const CheckoutInfo: React.FC = () => (
    <div className={styles.infoContainer}>
        <h1>Оформление заказа</h1>
        <div>
            <span>Имя</span>
            <input type="text"/>
        </div>
        <div>
            <span>Телефон</span>
            <input type="text"/>
        </div>
        <div>
            <span>Комментарий</span>
            <input type="text"/>
        </div>
        <div>
            <span>Адрес доставки</span>
            <input type="text"/>
        </div>
    </div>
);

export default CheckoutInfo;