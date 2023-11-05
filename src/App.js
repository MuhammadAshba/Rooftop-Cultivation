import './App.css';

import Header from './components/Header';
import Showcollection from './components/Showcollection';
import Products from './components/Products';
import NewArrival from './components/NewArrival';
// import Buyerdashboard from './Dashboards/BuyerDashboard/Buyerdashboard';
// import Admindashboard from './Dashboards/AdminDashboard/Adminashboard';
// import Sellerdashboard from './Dashboards/SellerDashboard/Sellerdashboard';





function App() {
  return ( 
    <div className="App">
      
      {/* <Buyerdashboard/> */}
       {/* <Sellerdashboard/> */}
      {/* <Admindashboard/> */}
      
      <Header/>
      <Showcollection/>
      <Products/>
      <NewArrival/>

    </div>
  );
}

export default App;
