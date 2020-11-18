import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LocationPreview from '../../../components/location-preview/location-preview.component';

// Actions to be tested
import * as selectActions from '../../../redux/app/app-action';

const mockStore = configureStore();
const date = new Date()
const initialState = {
   app: {
      selectedDate: date.toString(),
   },
};

const store = mockStore(initialState);

describe('LocationPreview Component', () => {
   beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
   });

   const wrapper = shallow(
      <Provider store={store}>
         <LocationPreview />
      </Provider>
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});
