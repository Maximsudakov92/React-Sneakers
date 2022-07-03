import styles from './Drawer.module.css';

function Drawer({onClose, onRemove ,items = []}) {
  return(
    <div className={styles.overlay}>
      <div className={styles.drawerCart}>
        <h2>
          Корзина
          <img onClick={onClose} width={32} height={32} src="/img/cancel.svg" alt="close" />  
        </h2>
        {items.length > 0 ?
        <>
          <div className={styles.cartContent}>
            <div className={styles.items}>
              {items.map((obj) => (
                <div className={styles.cartItem}>
                  <img width={70} height={70} src={`${obj.imageUrl}`} alt="sneakers" />
                  <div className={styles.cartItemInfo}>
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <button className={styles.cartBtnCancel} onClick={() => onRemove(obj.id)}>
                    <img width={32} height={32} src="/img/cancel.svg" alt="remove" />
                  </button>
                </div>
              ))}
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
        </> : 
          <div className={styles.emptyDrawer}>
            <img src="./img/cart.jpg" alt="cart" height={120} width={120} />
            <h3>Корзина пустая</h3>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={onClose}>Вернуться назад</button>
          </div>
        }
      </div>
    </div>
  )
}

export default Drawer;