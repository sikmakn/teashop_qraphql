import React from 'react';
import styles from './cardForCart.module.scss';
import PriceCard from '../priceCard';
import {ShortTea} from '../../types';
import TeaShortDescription from "../teaShortDescription";

export interface CardForCartParams extends ShortTea {
}

const CardForCart: React.FC<CardForCartParams> =
    ({
         _id,
         imgSrc,
         price,
         discount,
         description,
         weight
     }) => (
        <div className={styles.cardContainer}>
            <img src={imgSrc} alt=""/>
            <div className={styles.descriptionContainer}>
                <PriceCard price={price} discount={discount} weight={weight}/>
                <TeaShortDescription description={description}/>
            </div>
            <span className={styles.weight}><input type="text" value={weight}/>гр</span>
            <span className={styles.price}>{weight}р</span>
            <img className={styles.remove} src={`${process.env.PUBLIC_URL}/cancel.svg`} alt=""/>
        </div>
    );

export default CardForCart;