import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DatePicker from '../../../components/date-picker/date-picker.component';


const mockStore = configureStore();
const date = new Date()
const initialState = {
   app: {
      selectedDate: date.toString(),
   },
};

const store = mockStore(initialState);

describe('DatePicker Component', () => {
   beforeEach(() => {
      // Runs before each test in the suite
      store.clearActions();
   });

   const wrapper = shallow(
      <Provider store={store}>
         <DatePicker />
      </Provider>
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});
