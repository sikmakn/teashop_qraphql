import React, {useState} from 'react';
import styles from './cartMini.module.scss';
import {PATHS} from "../../constants";
import {Link} from "react-router-dom";

const CartMini: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <Link to={PATHS.CART} className={styles.cartMini}>
            <img src={`${process.env.PUBLIC_URL}/shopping_cart.svg`} alt="корзина"/>
            <span>{count}</span>
        </Link>
    );
};

export default CartMini;