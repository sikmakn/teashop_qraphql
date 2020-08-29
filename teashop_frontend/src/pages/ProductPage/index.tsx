import React from "react";
import {RouteComponentProps} from 'react-router-dom';
import Header from "../../components/header";
import Footer from "../../components/footer";
import CardsList from "../../components/cardsList";
import styles from './productPage.module.scss';
import DetailedProduct from "../../components/detailedProduct";

export interface ProductPageParams {
    match: RouteComponentProps<{ id: string }>
}

const ProductPage: React.FC<ProductPageParams> = ({match}) => {
    const teaInfos = [
        {
            _id: 'id',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            oldPrice: 220,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян scfsdfsd fdefw ewfew saasssf ' +
                'fewfыф ef wef wefwe f wefwe fwef wefwefwefwefwef',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id2',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            oldPrice: 220,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id3',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            oldPrice: 220,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id4',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            oldPrice: 220,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        }
    ];
    const productInf = {
        imgs: [
            `${process.env.PUBLIC_URL}/photo.jpg`,
            `${process.env.PUBLIC_URL}/photo.jpg`,
            `${process.env.PUBLIC_URL}/photo.jpg`,
            `${process.env.PUBLIC_URL}/photo.jpg`,
            `${process.env.PUBLIC_URL}/photo.jpg`
        ],
        description: 'Шу «Айлаошань 0919», 100г, 2016 г. Леопард из серии «Буфан» от Teashop.by',
        article: '005053',
        price: 200,
        discount: 0.45,
        effect: 'Тонизирует, согревает тело',
        packaging: 'Кирпич (спресованный)',
        taste: 'Пряный, "теплый"',
        type: 'Хэйча',
        brew: 'Идеален для варик на огне',
    };
    return (
        <>
            <Header/>
            <main>
                <DetailedProduct {...productInf}/>
                <h2 className={styles.alsoLikeHeader}>Вам может понравиться</h2>
                <CardsList teaInfos={teaInfos}/>
            </main>
            <Footer/>
        </>
    );
};

export default ProductPage;