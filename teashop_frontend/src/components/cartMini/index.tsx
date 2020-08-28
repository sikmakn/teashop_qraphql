import React, {useState} from 'react';
import styles from './cartMini.module.scss';
import {PATHS} from "../../constants";

const CartMini: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <a href={PATHS.CART} className={styles.cartMini}>
            <img src="./shopping_cart.svg" alt="корзина"/>
            <span>{count}</span>
        </a>
    );
};

export default CartMini;