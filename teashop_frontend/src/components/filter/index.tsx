import React, {Dispatch, SetStateAction, useState} from "react";
import styles from './filter.module.scss';
import FilterItem from "../filterItem";

export interface FilterParams {
    selectedIds: string[]
    setSelectedIds: Dispatch<SetStateAction<string[]>>
}

export interface FilterData {
    typeIds: string[]
    subscpeciesIds: string[]
}

const Filter: React.FC<FilterParams> = ({selectedIds, setSelectedIds}) => {
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
    return (
        <div className={styles.filterContainer}>
            {items.map((params) => <FilterItem {...params} selectedIds={selectedIds} setSelected={setSelectedIds}/>)}
            <button className={styles.button}>Очистить фильтры</button>
        </div>
    );
};

export default Filter;