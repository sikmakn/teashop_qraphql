import React, {useState} from "react";
import styles from './catalogItems.module.scss';

const CatalogItems: React.FC = () => {
    const [checkedIndex, setCheckedIndex] = useState(0);
    const items = [
        {
            id: 'id',
            name: 'Улун',
            subspecies: [
                {
                    id: 'id',
                    name: 'белый'
                }
            ]
        },
        {
            id: 'id2',
            name: 'Пуэр',
            subspecies: [
                {
                    id: 'id',
                    name: 'белый'
                }
            ]
        },
        {
            id: 'id3',
            name: 'Хэй Ча(черный)',
            subspecies: []
        }
    ];

    const checkedItemHandler = (index: number) => {
        setCheckedIndex(index);
    };

    return (
        <div className={styles.itemsContainer}>
            <div className={styles.catalogContainer}>
                {items.map(({name, id}, i) => (
                    checkedIndex === i ?
                        <div key={id} className={styles.checkedItem}>{name}</div> :
                        <div key={id} onClick={checkedItemHandler.bind(null, i)}>{name}</div>
                ))}
            </div>
            <div className={styles.subspeciesContainer}>
                {items[checkedIndex].subspecies.map(({name, id}) =>
                    <a href={`./${id}`} key={id}>{name}</a>)}
            </div>
        </div>
    );
};

export default CatalogItems;