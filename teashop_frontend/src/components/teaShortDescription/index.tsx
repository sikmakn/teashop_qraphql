import React from "react";
import styles from './teaShortDescription.module.scss';

export interface TeaShortDescriptionParams {
    description: string
}

const TeaShortDescription: React.FC<TeaShortDescriptionParams> = ({description}) => (
    <div className={styles.description}>
        <div>{description}</div>
    </div>
);

export default TeaShortDescription;