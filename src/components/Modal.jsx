import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt="" className={styles.image} />
      </div>
    </div>
  );
};

export default Modal;
