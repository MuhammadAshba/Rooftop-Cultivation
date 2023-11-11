import './App.css';

import Header from './components/Header';
import Showcollection from './components/Showcollection';
import Products from './components/Products';
import NewArrival from './components/NewArrival';
// import Admindashboard from './Dashboards/AdminDashboard/Adminashboard';
import Sellerdashboard from './Dashboards/SellerDashboard/Sellerdashboard';
import { PrimeReactProvider } from 'primereact/api';





function App() {
  return (
    <div className="App">
      <PrimeReactProvider>



        <Sellerdashboard />
        {/*<Admindashboard/> */}

        {/* <Header/>
      <Showcollection/>
      <Products/>
      <NewArrival/> */}
      </PrimeReactProvider>
    </div>
  );
}

export default App;
