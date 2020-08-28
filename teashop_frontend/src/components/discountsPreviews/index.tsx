import React from 'react';
import styles from './discountsPreview.module.scss';
import TeaCard from "../teaCard";

const DiscountPreview: React.FC = () => {
    const discountTeas = [
        {
            _id: 'id',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян scfsdfsd fdefw ewfew saasssf fewfыф ef wef wefwe f wefwe fwef wefwefwefwefwef',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id2',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            _id: 'id3',
            imgSrc: './photo.jpg',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
    ];
    return (
        <div className={styles.discountPreviewContainer}>
            {discountTeas.map(params => <TeaCard  {...params}/>)}
        </div>
    );
};

export default DiscountPreview;