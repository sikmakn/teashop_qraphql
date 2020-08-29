import React, {Dispatch, SetStateAction, useState} from "react";
import objEqual from 'deep-equal';
import styles from './sort.module.scss';

export interface SortParams {
    setSort: Dispatch<SetStateAction<SelectedSort>>
    selectedSort: SelectedSort
}

export interface SelectedSort {
    field: 'popularity' | 'price'
    orderBy: 1 | -1
}

const POPULARITY: SelectedSort = {
    field: 'popularity',
    orderBy: 1
};

const PRICE_GROW: SelectedSort = {
    field: 'price',
    orderBy: 1
};

const PRICE_DECREASE: SelectedSort = {
    field: 'price',
    orderBy: -1
};

const Sort: React.FC<SortParams> =
    ({
         setSort,
         selectedSort
     }) => {
        const [isVisibleModal, setVisibleModal] = useState(false);

        const changeSortHandler = (sortObj: SelectedSort) => {
            setVisibleModal(false);
            if (!objEqual(sortObj, selectedSort))
                setSort(sortObj);
        };

        function sortItem(name: string, sortObj: SelectedSort) {
            return (
                <div
                    onClick={changeSortHandler.bind(null, sortObj)}
                    className={objEqual(selectedSort, sortObj) ? styles.selected : ''}
                >
                    {name}
                    {
                        objEqual(selectedSort, sortObj) &&
                        <img src={`${process.env.PUBLIC_URL}/check_mark_selected.svg`} alt=""/>
                    }
                </div>
            )
        }

        return (
            <div className={styles.sortContainer}>
                <span
                    onClick={setVisibleModal.bind(null, !isVisibleModal)}
                    className={isVisibleModal ? styles.selected : ''}
                >
                    {objEqual(selectedSort, POPULARITY) && ('По популярности')}
                    {objEqual(selectedSort, PRICE_GROW) && ('Дешевые')}
                    {objEqual(selectedSort, PRICE_DECREASE) && ('Дорогие')}
                    <img
                        src={process.env.PUBLIC_URL + (isVisibleModal ? '/checkmark_active.svg' : '/checkmark.svg')}
                        alt=""
                    />
                </span>
                <div className={styles.popUp} style={{display: isVisibleModal ? 'block' : 'none'}}>
                    {sortItem('По популярности', POPULARITY)}
                    {sortItem('Дешевые', PRICE_GROW)}
                    {sortItem('Дорогие', PRICE_DECREASE)}
                </div>
            </div>
        );
    };

export default Sort;