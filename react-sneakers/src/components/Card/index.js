import React, {useState} from 'react';
import styles from './Card.module.css';

function Card({title, imageUrl, price, onFavorite, onPlus}) {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }

  return(
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img width={32} height={32} src="/img/unlike.svg" alt="unlike" onClick={onFavorite}/>
      </div>
      <img width={133} height={112} src={imageUrl} alt="Sneakers" />
      <p>{title}</p>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomInfo}>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <img 
          className={styles.cardBtnAdd} 
          onClick={onClickPlus} 
          src={isAdded ? "/img/btn-checked.svg" : "/img/plus.svg"} 
          alt="add"/>
      </div>
    </div>
  )
}

export default Card; 
