import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const sneakersItems = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 15999},
];


function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <Drawer />
        <Header />
        <div className="content">
          <div className="contentTop">
            <h1>Все кроссовки</h1>
            <div className="searchBlock">
              <img width={14.25} height={14.25} src="/img/search.svg" alt="Search" />
              <input placeholder="Поиск..." />
            </div>
          </div>
          <div className="cardWrapper">
            {sneakersItems.map((obj, index) => 
              <Card 
              title={obj.title} 
              price={obj.price}
              imageUrl={`/img/sneakers/${index + 1}.jpg`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
