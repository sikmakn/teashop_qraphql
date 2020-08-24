import React from "react";
import styles from './teaList.module.scss';
import TeaCard from "../teaCard";

export interface TeaListProps{
    name:string
    count:number
    teaInfos:[]
}

const TeaList: React.FC<TeaListProps> = ({name, count, teaInfos}) => {
    return (
        <div className={styles.teaListContainer}>
            <div>
                <div className={styles.teaName}>
                    <span className={styles.listName}>{name}</span>
                    <span className={styles.count}>{count}</span>
                </div>
                <a href="">Смотреть все товары</a>
            </div>
            <div>
                {teaInfos.map(()=><TeaCard/>)}
            </div>
        </div>
    );
};

export default TeaList;