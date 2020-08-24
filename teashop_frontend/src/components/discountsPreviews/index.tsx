import React from 'react';
import styles from './discountsPreview.module.scss';
import DiscountPreviewCard from "../discountPreviewCard";

const DiscountPreview:React.FC = ()=>{
    const discountTeas = [
        {
            id:'id',
            imgSrc: '',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            id:'id',
            imgSrc: '',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        },
        {
            id:'id',
            imgSrc: '',
            oldPrice: 220,
            discountPercentage: 45,
            description: 'Да Хун Пао Шу Сян',
            price: 160,
            weight: 100,
        }
    ];
    return (
        <div className={styles.discountPreviewContainer}>
            {discountTeas.map(params=> <DiscountPreviewCard  {...params}/>)}
        </div>
    );
};

export default DiscountPreview;