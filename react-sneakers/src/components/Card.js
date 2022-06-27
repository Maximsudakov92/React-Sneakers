function Card() {
  return(
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
  )
}

export default Card; 
