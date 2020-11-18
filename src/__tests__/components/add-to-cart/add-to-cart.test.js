import React from 'react';
import { Provider } from 'react-redux';
import  { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';
import AddToCart from '../../../components/add-to-cart/add-to-cart.component'


const mockStore = configureStore();

const initialState = {  
         app: { totalCartItem: 2, totalPrice: 200000 }
};

const store = mockStore(initialState);

describe('AddToCart Component', () => {
    
   it('should render with given state from Redux store', () => {
      const wrapper = shallow(<Provider store={store}>
         <AddToCart />
      </Provider>)
      expect(toJson(wrapper)).toMatchSnapshot();
    });
});
