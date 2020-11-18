import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Card from '../../../components/card/card.component';

// Actions to be tested
import * as selectActions from '../../../redux/app/app-action';

const mockStore = configureStore();

const initialState = {
   app: { totalCartItem: 2, totalPrice: 200000 },
};

const store = mockStore(initialState);

describe('AddToCart Component', () => {

    beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
    });
   
   const wrapper = shallow(
      <Provider store={store}>
         <Card />
      </Provider>
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});

describe('Add to cart action', () => {
   beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
   });

    const wrapper = shallow(
      <Provider store={store}>
         <Card />
      </Provider>
   );

   it('', () => {
      
   })

   it('Dispatches the correct action and payload', () => {
      const item =  {
         id: 1,
         rating: 3.5,
         name: 'chicken fried noodle',
         resto: 'Up Town',
         price: 25000,
         image: 'https://images.unsplash.com/photo-1578552606388-a0f1d618a9dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
         category: ['lunch',]
   }
      const expectedActions = [
         {
            type: 'ADD_TO_CART',
            payload: item,
         },
      ];
      store.dispatch(selectActions._addToCart(item));
      expect(store.getActions()).toEqual(expectedActions);
   });
});
