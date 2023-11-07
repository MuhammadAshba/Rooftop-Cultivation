import './App.css';

import Header from './components/Header';
import Showcollection from './components/Showcollection';
import Products from './components/Products';
import NewArrival from './components/NewArrival';
// import Admindashboard from './Dashboards/AdminDashboard/Adminashboard';
import Sellerdashboard from './Dashboards/SellerDashboard/Sellerdashboard';





function App() {
  return ( 
    <div className="App">
      
       <Sellerdashboard/>
      {/*<Admindashboard/> */}
      
      {/* <Header/>
      <Showcollection/>
      <Products/>
      <NewArrival/> */}

    </div>
  );
}

export default App;
