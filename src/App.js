import './App.css';

import Header from './components/Header';
import Showcollection from './components/Showcollection';
import Products from './components/Products';
import NewArrival from './components/NewArrival';



function App() {
  return ( 
    <div className="App">

      <Header/>
      <Showcollection/>
      <Products/>
      <NewArrival/>

    </div>
  );
}

export default App;
