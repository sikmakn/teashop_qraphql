import React from "react";
import styles from './inscriptionWithCount.module.scss';

export interface InscriptionWithCountParams {
    inscription: string
    count: number
}

const InscriptionWithCount: React.FC<InscriptionWithCountParams> = ({count, inscription}) => (
    <>
        <span className={styles.listName}>{inscription}</span>
        <span className={styles.count}>{count}</span>
    </>
);

export default InscriptionWithCount;