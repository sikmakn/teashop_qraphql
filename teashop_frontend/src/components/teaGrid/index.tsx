import React from "react";
import styles from './teagrid.module.scss';
import TeaCard, {TeaCardParams} from "../teaCard";

export interface TeaGridParams {
    teaInfos: TeaCardParams[]
}

const TeaGrid: React.FC<TeaGridParams> = ({teaInfos}) => (
    <div className={styles.gridContainer}>
        {teaInfos.map((params) => <div><TeaCard key={params.id} {...params} isCart={true}/></div>)}
    </div>
);

export default TeaGrid;