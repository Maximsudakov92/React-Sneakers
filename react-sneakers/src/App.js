import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
