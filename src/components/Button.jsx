import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, isHidden }) => {
  return (
    <button className={styles.button} onClick={onClick} hidden={isHidden}>
      Load more
    </button>
  );
};

export default Button;
