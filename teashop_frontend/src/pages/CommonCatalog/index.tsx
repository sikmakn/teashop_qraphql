import React, {useState} from "react";
import styles from './commonCatalog.module.scss';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Filter from "../../components/filter";
import TeaGrid from "../../components/teaGrid";
import Sort, {SelectedSort} from "../../components/sort";
import InscriptionWithCount from "../../components/inscriptionWithCount";

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
        },
        {
            _id: 'id5',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id6',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id7',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id8',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id9',
            imgSrc: `${process.env.PUBLIC_URL}/photo.jpg`,
            discount: 0.45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        }
    ];

    const [sort, setSort] = useState<SelectedSort>({field: 'popularity', orderBy: 1});

    const [selectedFilterIds, setSelectedFilterIds] = useState<string[]>([]);
    return (
        <>
            <Header/>
            <main className={styles.mainContainer}>
                <Filter selectedIds={selectedFilterIds} setSelectedIds={setSelectedFilterIds}/>
                <div className={styles.teaGridContainer}>
                    <div className={styles.topContainer}>
                        <div><InscriptionWithCount inscription={'Все товары'} count={count}/></div>
                        <Sort selectedSort={sort} setSort={setSort}/>
                    </div>
                    <TeaGrid teaInfos={teaInfos}/>
                </div>
            </main>
            <Footer/>
        </>
    );
};

export default CommonCatalog;