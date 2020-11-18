import React from 'react';
import { useSelector } from 'react-redux';
import Header from './components/header/header.component';
import LocationModal from './components/location-modal/location-modal.component';
import {GlobalStyles} from './global.styles'
import OrderPage from './pages/order-page/order-page.component';

// import './App.css'

function App() {
   //useSelector
  const hiddenLocationModal = useSelector((state) => state.app.hiddenLocationModal);
  
 
  return (
    

    <div className="App">
      <GlobalStyles/>
      <Header />
      <OrderPage />
      {!hiddenLocationModal ? <LocationModal/> : null }
    </div>
  );
}

export default App;
