import React from "react";
import styles from './commonCatalog.module.scss';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Filter from "../../components/filter";
import TeaGrid from "../../components/teaGrid";
import Sort from "../../components/sort";

const CommonCatalog: React.FC = () => {
    const count = 85;
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
            <main className={styles.mainContainer}>
                <Filter/>
                <div className={styles.teaGridContainer}>
                    <div className={styles.topContainer}>
                        <h1>Все товары <span>{count}</span></h1>
                        <Sort/>
                    </div>
                    <TeaGrid teaInfos={teaInfos}/>
                </div>

            </main>
            <Footer/>
        </>
    );
};

export default CommonCatalog;