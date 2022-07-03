import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';


function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cardOpened, setCardOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://62bdb08cbac21839b60925fa.mockapi.io/items').then(res => {
      setItems(res.data);
    })
    axios.get('https://62bdb08cbac21839b60925fa.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, []); 

  const onAddToCart = (obj) => {
    axios.post('https://62bdb08cbac21839b60925fa.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://62bdb08cbac21839b60925fa.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="app">
      <div className="wrapper">
        {cardOpened && <Drawer items={cartItems} onClose={() => setCardOpened(false)}  onRemove={onRemoveItem}/>}
        <Header onClickCart={() => setCardOpened(true)} />
        <div className="content">
          <div className="contentTop">
            <h1>Все кроссовки</h1>
            <div className="searchBlock">
              <img width={14.25} height={14.25} src="/img/search.svg" alt="Search" />
              <input onChange={onChangeSearchInput} value={searchValue } placeholder="Поиск..." maxLength={19} />
              {searchValue && <img onClick={() => setSearchValue('')} 
                width={14.25} 
                height={14.25} 
                src="/img/cancel.svg" 
                alt="Clear" 
              />}
            </div>
          </div>
          <div className="cardWrapper">
            {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item, index) => 
              <Card
                key={index}
                title={item.title} 
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Добавили в закладки')}
                onPlus={(obj) => onAddToCart(obj)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
