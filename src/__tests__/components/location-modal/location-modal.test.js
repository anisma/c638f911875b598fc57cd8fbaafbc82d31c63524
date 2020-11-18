import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LocationModal from '../../../components/location-modal/location-modal.component';

// Actions to be tested
import * as selectActions from '../../../redux/app/app-action';

const mockStore = configureStore();
const date = new Date()
const initialState = {
   app: {
       filteredLocation: {
         name: 'Kulina Headquarters',
         address:'Gedung Kulina Lt. 3, Jalan Tulodong Atas No. 28, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190, Indonesia',
      },
   },
};

const store = mockStore(initialState);

describe('LocationModal Component', () => {
   beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
   });

   const wrapper = shallow(
      <Provider store={store}>
         <LocationModal />
      </Provider>
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});
