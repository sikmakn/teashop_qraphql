import React from "react";
import styles from  './priceCard.module.scss';

export interface PriceCardParams {
    price: number
    discount: number
    weight: number
}

const PriceCard:React.FC<PriceCardParams> = ({price, weight, discount}) => (
    <>
        <span className={styles.price}>{(price * (1 - discount) * weight / 100).toFixed(2)}р</span>
        /
        <span>{weight}гр</span>
        <s><span className={styles.oldPrice}>{price}р</span></s>
        <span className={styles.discount}>-{discount * 100}%</span>
    </>
);

export default PriceCard;