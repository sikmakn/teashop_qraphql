import React, {useState} from "react";
import styles from './detailedProduct.module.scss';
import Gallery from "../gallery";

export interface DetailedProductParams {
    imgs: string[]
    description: string
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
         description,
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
        return (
            <div className={styles.productContainer}>
                <Gallery imgPaths={imgs}/>
                <div className={styles.productInfoContainer}>
                    <h1>{description}</h1>
                    <div className={styles.article}>Артикул <span>{article}</span></div>
                    <div className={styles.priceContainer}>
                        <span className={styles.price}>
                            {discount ? price * discount * weight : price * weight}
                        </span>
                        <input type="text"/> гр
                        {discount && <span className={styles.oldPrice}>{price}р</span>}
                        {discount && <span className={styles.discount}>{discount}%</span>}
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