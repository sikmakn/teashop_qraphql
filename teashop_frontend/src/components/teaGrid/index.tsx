import React from "react";
import styles from './teagrid.module.scss';
import TeaCard, {TeaCardParams} from "../teaCard";

export interface TeaGridParams {
    teaInfos: TeaCardParams[]
}

const TeaGrid: React.FC<TeaGridParams> = ({teaInfos}) => (
    <div className={styles.gridContainer}>
        {teaInfos.map((params) => <TeaCard key={params._id} {...params}/>)}
    </div>
);

export default TeaGrid;