import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import styles from './filterItem.module.scss';

export interface FilterItemParams extends FilterItemData {
    subspecies: FilterItemData[]
    selectedIds: string[]
    setSelected: Dispatch<SetStateAction<string[]>>
}

export interface FilterItemData {
    id: string
    name: string
}

const FilterItem: React.FC<FilterItemParams> =
    ({
         id,
         name,
         subspecies,
         selectedIds,
         setSelected
     }) => {
        const [isVisible, setIsVisible] = useState(false);
        const [isAll, setIsAll] = useState(false);

        useEffect(()=>{
            if (isAll) {
                const _idsSet = new Set([...selectedIds, ...subspecies.map(({id}) => id)]);
                return setSelected(Array.from(_idsSet));
            }
            setSelected(selectedIds.filter(id => !subspecies.some(({id}) => id === id)))
        }, [isAll]);

        function isContainedInSelected(_id: string) {
            return isAll || selectedIds.includes(_id);
        }

        const selectFilter = (_id: string) => {
            if (_id === 'all') return setIsAll(!isAll);

            const index = selectedIds.indexOf(_id);
            const _ids = index >= 0 ?
                selectedIds.filter((params, i) => i !== index) :
                [...selectedIds, _id];
            setSelected(_ids);
        };

        function getSubItem(name: string, _id: string) {
            return (
                <div key={_id} className={styles.subItem} onClick={selectFilter.bind(null, _id)}>
                    <img
                        src={
                            process.env.PUBLIC_URL +
                            (isContainedInSelected(_id) ? '/checkbox_active.svg' : '/checkbox.svg')
                        }
                        alt=""
                    />
                    <span>{name}</span>
                </div>
            );
        }

        return (
            <div className={styles.itemContainer}>
                <div
                    className={styles.itemName}
                    onClick={setIsVisible.bind(null, !isVisible)}
                >
                    <img
                        src={process.env.PUBLIC_URL + (isVisible ? '/checkmark_active.svg' : '/checkmark.svg')}
                        alt=""
                    />
                    <span className={styles.selected}>{name}</span>
                </div>
                <div className={styles.subItemsContainer} style={{display: isVisible ? 'block' : 'none'}}>
                    {getSubItem('Выбрать все', 'all')}
                    {subspecies.map(({id, name}) => getSubItem(name, id))}
                </div>
            </div>
        );
    };

export default FilterItem;