import React, {useState} from 'react';
import styles from './teaCard.module.scss';
import {PATHS} from "../../constants";
import {Link} from "react-router-dom";
import PriceCard from "../priceCard";
import {ShortTea} from "../../types";
import TeaShortDescription from "../teaShortDescription";

export interface TeaCardParams extends ShortTea {
    isCart?: boolean
}

const TeaCard: React.FC<TeaCardParams> =
    ({
         id,
         imgSrc,
         shortDescription,
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
            <Link to={`${PATHS.PRODUCT}/${id}`} className={styles.cardContainer} style={{width: isCart ? 285 : 217}}>
                <img src={imgSrc} alt={shortDescription}/>
                <div className={styles.commonInfoContainer}>
                    <PriceCard price={price} discount={discount} weight={weight}/>
                    {isCart && <Link
                        to={PATHS.CART}
                        onMouseEnter={isMouseEnterHandler.bind(null)}
                        onMouseLeave={isMouseLeaveHandler.bind(null)}
                    >
                        <img
                            src={process.env.PUBLIC_URL + (isHoverCart ? '/cart_yellow.svg' : '/cart_grey.svg')}
                            alt=""
                        />
                    </Link>
                    }
                </div>
                <TeaShortDescription description={shortDescription}/>
            </Link>
        );
    };

export default TeaCard;