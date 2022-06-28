import styles from './Card.module.css';

function Card(props) {
  return(
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img width={32} height={32} src="/img/unlike.svg" alt="unlike" />
      </div>
      <img width={133} height={112} src={props.imageUrl} alt="Sneakers" />
      <p>{props.title}</p>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomInfo}>
          <span>Цена:</span>
          <b>{props.price}</b>
        </div>
        <button className={styles.cardBtnAdd}>
          <img width={30} height={30} src="/img/plus.svg" alt="add" />
        </button>
      </div>
    </div>
  )
}

export default Card; 
