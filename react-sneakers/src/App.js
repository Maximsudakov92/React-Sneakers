


function App() {
  return (
    <div className="app">
      <div className="wrapper">
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
          <h1>Все кроссовки</h1>
          <div className="cardWrapper">
            <div className="card">
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
