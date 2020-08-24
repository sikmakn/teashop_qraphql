import React from 'react';
import styles from './discountPreviewCard.module.scss';

export interface DiscordPreviewCardParams {
    id: string
    imgSrc: string
    oldPrice: number
    discountPercentage: number
    description: string
    price: number
    weight: number
}

const DiscountPreviewCard: React.FC<DiscordPreviewCardParams> =
    ({
         id,
         imgSrc,
         description,
         oldPrice,
         discountPercentage,
         price,
         weight
     }) => (
        <a href={`./${id}`} className={styles.cardContainer}>
            <img src={imgSrc} alt={description}/>
            <div>
                <span className={styles.price}>{price}р</span>/<span>{weight}</span>
                <span className={styles.oldPrice}>{oldPrice}</span>
                <span className={styles.discountPercentage}>{discountPercentage}</span>
            </div>
            <span>{description}</span>
        </a>
    );

export default DiscountPreviewCard;