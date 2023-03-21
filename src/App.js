import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import HomeNavbar from './components/HomeNavbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <HomeNavbar/>
     {/* <Counter/> */}
     <Products/>
    </div>
  );
}

export default App;
