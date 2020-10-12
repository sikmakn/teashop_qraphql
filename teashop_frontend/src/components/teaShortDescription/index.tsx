import React from "react";
import styles from './teaShortDescription.module.scss';

export interface TeaShortDescriptionParams {
    description: string
}

const TeaShortDescription: React.FC<TeaShortDescriptionParams> = ({description}) => (
    <div className={styles.shortDescription}>
        <div>{description}</div>
    </div>
);

export default TeaShortDescription;