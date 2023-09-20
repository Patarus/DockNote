import React from 'react';
import styles from './SearchBar.module.scss';

function SearchBar() {
  return (
    <div className={styles['navbar']}>
      <div className={styles['dock-note-text']}>DockNote</div>
      <div className={styles['search-bar']}>
        <div className={styles['search-icon']}></div>
        <input type="text" placeholder="Search" className={styles['search-input']} />
      </div>
      <div className={styles['second-text']}>NOTE</div>
    </div>
  );
}

export default SearchBar;
