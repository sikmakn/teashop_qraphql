import React, {useState} from 'react';
import styles from './teaCard.module.scss';
import {PATHS} from "../../constants";

export interface TeaCardParams {
    _id: string
    imgSrc: string
    price: number
    discount: number
    description: string
    weight: number
    isCart?: boolean
}

const TeaCard: React.FC<TeaCardParams> =
    ({
         _id,
         imgSrc,
         description,
         price,
         discount,
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
            <a href={`${PATHS.PRODUCT}/${_id}`} className={styles.cardContainer} style={{width: isCart ? 285 : 217}}>
                <img src={imgSrc} alt={description}/>
                <div className={styles.commonInfoContainer}>
                    <span className={styles.price}>{(price * (1 - discount) * weight/100).toFixed(2)}р</span> / <span>{weight}гр</span>
                    <s><span className={styles.oldPrice}>{price}р</span></s>
                    <span className={styles.discount}>-{discount*100}%</span>
                    {isCart && <a
                        href={PATHS.CART}
                        onMouseEnter={isMouseEnterHandler.bind(null)}
                        onMouseLeave={isMouseLeaveHandler.bind(null)}
                    >
                        <img
                            src={
                                process.env.PUBLIC_URL +
                                (isHoverCart ? '/cart_yellow.svg' : '/cart_grey.svg')
                            }
                            alt=""
                        />
                    </a>
                    }
                </div>
                <div className={styles.description}>
                    <div>{description}</div>
                </div>
            </a>
        );
    }

export default TeaCard;