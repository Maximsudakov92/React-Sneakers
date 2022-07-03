import styles from './Header.module.css';



function Header(props) {
  return(
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className={styles.headerRight}>
        <li onClick={props.onClickCart}>
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span>
        </li>
        <li><img width={21} height={19} src="/img/favorite.svg" alt="favorite"/></li>
        <li><img width={20} height={20} src="/img/user.svg" alt="user"/></li>
      </ul> 
    </header>
  )
}

export default Header;