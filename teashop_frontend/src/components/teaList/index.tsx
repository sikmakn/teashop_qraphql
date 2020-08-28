import React from "react";
import styles from './teaList.module.scss';
import TeaCard, {TeaCardParams} from "../teaCard";

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
            <div className={styles.cardContainer}>
                {teaInfos.map(params => <TeaCard {...params} key={params._id} isCart={true}/>)}
            </div>
        </div>
    );
};

export default TeaList;