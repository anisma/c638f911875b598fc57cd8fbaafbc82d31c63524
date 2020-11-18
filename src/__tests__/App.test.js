import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import  { shallow } from 'enzyme';
import App from '../App'

import toJson from 'enzyme-to-json';

const mockStore = configureStore([]);



describe('App Component', () => {
  let store;
 
  beforeEach(() => {
    store = mockStore({
      app: { hiddenLocationModal: false} 
    });
  });
  
  it('should render with given state from Redux store', () => {
    const wrapper = shallow(<Provider store={store}>
        <App />
       </Provider>)

    expect(toJson(wrapper)).toMatchSnapshot();
 
  });
 
});