


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="overlay">
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
        <header>
          <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" alt="logo" />
            <div className="headerInfo">
              <h3>React Sneakers</h3>
              <p>Магазин лучших кроссовок</p>
            </div>
          </div>
          <ul className="headerRight">
            <li>
              <img width={18} height={18} src="/img/cart.svg" alt="cart" />
              <span>1205 руб.</span>
            </li>
            <li><img width={21} height={19} src="/img/favorite.svg" alt="favorite"/></li>
            <li><img width={20} height={20} src="/img/user.svg" alt="user"/></li>
          </ul> 
        </header>
        <div className="content">
          <div className="contentTop">
            <h1>Все кроссовки</h1>
            <div className="searchBlock">
              <img width={14.25} height={14.25} src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="cardWrapper">
            <div className="card">
              <div className="favorite">
                <img width={32} height={32} src="/img/unlike.svg" alt="unlike" />
              </div>
              <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
              <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <div className="cardBottom">
                <div className="cardBottomInfo">
                  <span>Цена:</span>
                  <b>12 999руб.</b>
                </div>
                <button className="cardBtnAdd">
                  <img width={30} height={30} src="/img/plus.svg" alt="add" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
