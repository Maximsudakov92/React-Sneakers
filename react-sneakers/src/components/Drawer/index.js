import styles from './Drawer.module.css';

function Drawer() {
  return(
    <div className={styles.overlay}>
      <div className={styles.drawerCart}>
        <h2>
          Корзина
          <img width={32} height={32} src="/img/cancel.svg" alt="cancel" />  
        </h2>
        <div className={styles.cartContent}>
          <div className={styles.items}>
            <div className={styles.cartItem}>
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div className={styles.cartItemInfo}>
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999руб.</b>
              </div>
              <button className={styles.cartBtnCancel}>
                <img width={32} height={32} src="/img/cancel.svg" alt="cancel" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cartBottom}>
          <ul>
            <li>
              <span>Итого:</span>
              <div className={styles.dashed}></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div className={styles.dashed}></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
        <button className={styles.greenButton}>Оформить заказ</button>
      </div>
    </div>
  )
}

export default Drawer;