import React from "react";
import styles from './teaList.module.scss';
import TeaCard, {TeaCardParams} from "../teaCard";
import CardsList from "../cardsList";

export interface TeaListProps {
    name: string
    count: number
    teaInfos: TeaCardParams[]
}

const TeaList: React.FC<TeaListProps> = ({name, count, teaInfos}) => {
    return (
        <div className={styles.teaListContainer}>
            <div className={styles.teaName}>
                <span className={styles.listName}>{name}</span>
                <sup className={styles.count}>{count}</sup>
                <a href="">Смотреть все товары</a>
            </div>
            <CardsList teaInfos={teaInfos}/>
        </div>
    );
};

export default TeaList;