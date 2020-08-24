import React from "react";
import styles from './catalog.module.scss';
import CatalogItems from "../catalogItems";
import DiscountPreview from "../discountsPreviews";

const Catalog: React.FC = () => {
    return (
        <div className={styles.catalogContainer}>
            <CatalogItems/>
            <DiscountPreview/>
        </div>
    );
};

export default Catalog;