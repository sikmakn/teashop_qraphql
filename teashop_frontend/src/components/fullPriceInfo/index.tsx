import React, {Dispatch, SetStateAction} from "react";
import styles from './fullPriceInfo.module.scss';

export interface FullPriceInfoParams {
    infos: PriceInfo[]
    isDelivery: boolean
    setIsDelivery: Dispatch<SetStateAction<boolean>>
    delivery: number
}

export interface PriceInfo {
    price: number
    discount: number
}

const FullPriceInfo: React.FC<FullPriceInfoParams> =
    ({
         infos,
         isDelivery,
         setIsDelivery,
         delivery
     }) => {

        function getFullPrice() {
            let sum = 0;
            infos.forEach(({price}) => sum += price);
            return sum;
        }

        function getFullDiscount() {
            let sum = 0;
            infos.forEach(({price, discount}) => sum += price * discount);
            return sum;
        }

        return (
            <div className={styles.fullPriceContainer}>
                <div className={styles.priceInfo}>
                    <div>
                        <span>Общая сумма</span>
                        <span className={styles.value}>{getFullPrice()}р</span>
                    </div>
                    <div>
                        <span>Общая скидка</span>
                        <span className={styles.value}>-{getFullDiscount()}р</span>
                    </div>
                    <div className={styles.deliveryContainer}>
                        <div>
                            <span onClick={setIsDelivery.bind(null, true)}
                                  className={isDelivery ? styles.selected : ''}>Доставка курьером</span>
                            / <span onClick={setIsDelivery.bind(null, false)}
                                    className={isDelivery ? '' : styles.selected}>Минск, Скрпиникова 30</span>
                        </div>
                        <span className={styles.value}>+{isDelivery ? delivery : 0}р</span>
                    </div>
                </div>
                <div className={styles.total}>
                    <span>Итого</span>
                    <span className={styles.value}>{getFullPrice() - getFullDiscount()}р</span>
                </div>
                <span className={styles.deliveryInfo}>Бесплатная доставка при покупке от 15 000р</span>
            </div>
        );
    };

export default FullPriceInfo;