import React from "react";
import styles from './teaList.module.scss';
import TeaCard, {TeaCardParams} from "../teaCard";
import CardsList from "../cardsList";
import {PATHS} from "../../constants";
import InscriptionWithCount from "../inscriptionWithCount";

export interface TeaListProps {
    name: string
    count: number
    teaInfos: TeaCardParams[]
}

const TeaList: React.FC<TeaListProps> = ({name, count, teaInfos}) => {
    return (
        <div className={styles.teaListContainer}>
            <div className={styles.teaName}>
                <InscriptionWithCount inscription={name} count={count}/>
                <a href={PATHS.CATALOG}>Смотреть все товары</a>
            </div>
            <CardsList teaInfos={teaInfos}/>
        </div>
    );
};

export default TeaList;