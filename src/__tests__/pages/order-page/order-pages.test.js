import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import OrderPages from '../../../pages/order-page/order-page.component';

const mockStore = configureStore();
const initialState = {
   app: {
      mealTime: 'lunch',
      cart: [],
      meals:[{
      id: 1,
      rating: 3.5,
      name: 'chicken fried noodle',
      resto: 'Up Town',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1578552606388-a0f1d618a9dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      category: ['lunch',]
   },
    {
      id: 2,
      rating: 4.0,
      name: 'tuna bread with vegetable',
      resto: 'Up Town',
      price: 25000,
      image: 'https://images.unsplash.com/photo-1600336247312-ba19bc8e60fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      category: ['lunch', 'dinner']
   },
    {
      id: 3,
      rating: 4.5,
      name: 'special fried rice',
      resto: 'Up Town',
      price: 35000,
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      category: ['dinner']
   },
    {
      id: 4,
      rating: 4.0,
      name: 'paperoni pizza with cheese',
      resto: 'Up Town',
      price: 125000,
      image: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      category: ['dinner']
   }]
   },
};

const store = mockStore(initialState);

describe('OrderPages Component', () => {
   beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
   });

   const wrapper = shallow(
      <Provider store={store}>
         <OrderPages />
      </Provider>
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});
