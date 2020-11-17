import Header from './components/header/header.component';
import LocationModal from './components/location-modal/location-modal.component';
import {GlobalStyles} from './global.styles'
import OrderPage from './pages/order-page/order-page.component';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header />
      <OrderPage />
      {/* <LocationModal/> */}
    </div>
  );
}

export default App;
