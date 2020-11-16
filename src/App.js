import CustomButton from './components/custom-button/custom-button.component';
import Header from './components/header/header.component';
import {GlobalStyles} from './global.styles'
import OrderPage from './pages/order-page/order-page.component';

function App() {
  return (
    <div className="App">
      <GlobalStyles/>
      <Header />
      <OrderPage/>
    </div>
  );
}

export default App;
