import React, {useEffect, useState} from "react";
import styles from './detailedProduct.module.scss';
import Gallery from "../gallery";

export interface DetailedProductParams {
    imgs: string[]
    shortDescription: string
    article: string
    price: number
    discount: number
    effect: string
    packaging: string
    taste: string
    type: string
    brew: string
}

const DetailedProduct: React.FC<DetailedProductParams> =
    ({
         imgs,
         shortDescription,
         article,
         price,
         discount,
         effect,
         packaging,
         taste,
         type,
         brew,
     }) => {
        const [weight, setWeight] = useState(1);
        const [realPrice, setRealPrice] = useState(calculateRealPrice());
        useEffect(() => {
            setRealPrice(calculateRealPrice())
        }, [weight]);

        function calculateRealPrice() {
            const realPrice = discount ?
                price * (1 - discount) * weight :
                price * weight;
            return realPrice.toFixed(2);
        }

        return (
            <div className={styles.productContainer}>
                <Gallery imgPaths={imgs}/>
                <div className={styles.productInfoContainer}>
                    <h1>{shortDescription}</h1>
                    <div className={styles.article}>Артикул <span>{article}</span></div>
                    <div className={styles.priceContainer}>
                        <span className={styles.realPrice}>{realPrice}р</span>
                        <span className={styles.weight}><input type="text" value={weight * 100}/> гр</span>
                        {discount && <s className={styles.oldPrice}><span>{price}р</span></s>}
                        {discount && <span className={styles.discount}>{discount * 100}%</span>}
                    </div>
                    <div className={styles.cartContainer}>
                        <button>В корзину</button>
                        <a href="">Приобрести упаковку</a>
                        <span>(250гр)</span>
                    </div>
                    <div className={styles.info}>
                        <div>
                            <span className={styles.name}>Дествие чая</span>
                            <span className={styles.value}>{effect}</span>
                        </div>
                        <div>
                            <span className={styles.name}>Внешний вид</span>
                            <span className={styles.value}>{packaging}</span>
                        </div>
                        <div>
                            <span className={styles.name}>Как заварить</span>
                            <span className={styles.value}>{brew}</span>
                        </div>
                        <div>
                            <span className={styles.name}>Тип чая</span>
                            <span className={styles.value}>{type}</span>
                        </div>
                        <div>
                            <span className={styles.name}>Вкус</span>
                            <span className={styles.value}>{taste}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default DetailedProduct;