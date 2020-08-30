import React, {useState} from "react";
import styles from  './checkoutPage.module.scss';
import Header from "../../components/header";
import Footer from "../../components/footer";
import InscriptionWithCount from "../../components/inscriptionWithCount";
import CardForCart from "../../components/cardForCart";
import FullPriceInfo from "../../components/fullPriceInfo";
import CheckoutInfo from "../../components/checkoutInfo";

const CheckoutPage: React.FC = () => {
    const delivery = 500;
    const [isDelivery, setIsDelivery] = useState(true);

    const count = 2;
    const teaInfos = [
        {
            _id: 'id',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян scfsdfsd fdefw ewfew saasssf fewfыф ef wef wefwe f wefwe fwef wefwefwefwefwef',
            price: 265,
            weight: 100,
        },
        {
            _id: 'id2',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id3',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id4',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        }
    ];

    return (
        <>
            <Header/>
            <main>
                <InscriptionWithCount inscription={'Корзина'} count={count}/>
                {teaInfos.map(params => <CardForCart {...params}/>)}
                <FullPriceInfo
                    infos={teaInfos}
                    isDelivery={isDelivery}
                    setIsDelivery={setIsDelivery}
                    delivery={delivery}
                />
                <CheckoutInfo/>
                <button className={styles.button}>Оформить</button>
            </main>
            <Footer/>
        </>
    );
};

export default CheckoutPage;