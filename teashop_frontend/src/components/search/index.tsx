import React from 'react';
import styles from './search.module.scss';

const Search:React.FC = ()=>(
    <input className={styles.search} type="search" placeholder="Поиск по товарам"/>
);

export default Search;