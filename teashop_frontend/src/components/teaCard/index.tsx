import React, {useState} from 'react';
import styles from './teaCard.module.scss';
import {PATHS} from "../../constants";

export interface TeaCardParams {
    _id: string
    imgSrc: string
    oldPrice: number
    discountPercentage: number
    description: string
    price: number
    weight: number
    isCart?: boolean
}

const TeaCard: React.FC<TeaCardParams> =
    ({
         _id,
         imgSrc,
         description,
         oldPrice,
         discountPercentage,
         price,
         weight,
         isCart = false
     }) => {
        const [isHoverCart, setIsHoverCart] = useState(false);
        const isMouseEnterHandler = () => {
            setIsHoverCart(true);
        };
        const isMouseLeaveHandler = () => {
            setIsHoverCart(false);
        };

        return (
            <a href={`./${_id}`} className={styles.cardContainer} style={{width: isCart ? 285 : 217}}>
                <img src={imgSrc} alt={description}/>
                <div className={styles.commonInfoContainer}>
                    <span className={styles.price}>{price}р</span> / <span>{weight}гр</span>
                    <span className={styles.oldPrice}>{oldPrice}р</span>
                    <span className={styles.discountPercentage}>-{discountPercentage}%</span>
                    <a
                        href={PATHS.CART}
                        onMouseEnter={isMouseEnterHandler.bind(null)}
                        onMouseLeave={isMouseLeaveHandler.bind(null)}
                    >
                        <img
                            src={isHoverCart ? './cart_yellow.svg' : './cart_grey.svg'}
                            alt=""
                        />
                    </a>
                </div>
                <div className={styles.description}>
                    <div>{description}</div>
                </div>
            </a>
        );
    }

export default TeaCard;