import React from "react";
import styles from './teaList.module.scss';
import {TeaCardParams} from "../teaCard";
import CardsList from "../cardsList";
import {PATHS} from "../../constants";
import InscriptionWithCount from "../inscriptionWithCount";
import {Link} from "react-router-dom";

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
                <Link to={PATHS.CATALOG}>Смотреть все товары</Link>
            </div>
            <CardsList teaInfos={teaInfos}/>
        </div>
    );
};

export default TeaList;