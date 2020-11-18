import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import LocationInput from '../../../components/location-input/loaction-input.component';

// Actions to be tested
import * as selectActions from '../../../redux/app/app-action';

const mockStore = configureStore();

const initialState = {
   app: {
      locations: [
         {
            name: 'Kulina Headquarters',
            address:
               'Gedung Kulina Lt. 3, Jalan Tulodong Atas No. 28, Senayan, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12190, Indonesia',
         },
         {
            name: 'Kulina Dev Center',
            address:
               'CoHive Hartono Mall Hartono Mall Yogyakarta, 3rd Floor, Kaliwaru, Condongcatur, Depok Sub-District, Sleman Regency, Special Region of Yogyakarta 55281',
         },
         {
            name: 'Kulina Kitchen 1',
            address:
               'Mall Ambassador Lt. 4 food district 1 No. 14A, RT.11/RW.4, Kuningan, Karet Kuningan, South Jakarta City, Jakarta 12940',
         },
      ],
      filteredLocation: [
         {
            name: 'Kulina Dev Center',
            address:
               'CoHive Hartono Mall Hartono Mall Yogyakarta, 3rd Floor, Kaliwaru, Condongcatur, Depok Sub-District, Sleman Regency, Special Region of Yogyakarta 55281',
         },
      ],
   },
};

const store = mockStore(initialState);

describe('Location Input Component', () => {
   beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
   });

   const wrapper = shallow(
      <Provider store={store}>
         <LocationInput />
      </Provider>
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});
