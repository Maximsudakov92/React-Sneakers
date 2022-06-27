function Drawer() {
  return(
    <div style={{display: "none"}} className="overlay">
      <div className="drawerCart">
        <h2>
          Корзина
          <img width={32} height={32} src="/img/cancel.svg" alt="cancel" />  
        </h2>
        <div className="cartContent">
          <div className="items">
            <div className="cartItem">
              <img width={70} height={70} src="/img/sneakers/1.jpg" alt="sneakers" />
              <div className="cartItemInfo">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <b>12 999руб.</b>
              </div>
              <button className="cartBtnCancel">
                <img width={32} height={32} src="/img/cancel.svg" alt="cancel" />
              </button>
            </div>
          </div>
        </div>
        <div className="cartBottom">
          <ul>
            <li>
              <span>Итого:</span>
              <div className="dashed"></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div className="dashed"></div>
              <b>1074 руб.</b>
            </li>
          </ul>
        </div>
        <button className="greenButton">Оформить заказ</button>
      </div>
    </div>
  )
}

export default Drawer;