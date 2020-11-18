import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PropTypes from 'prop-types';
import Date from '../../../components/date/date.component'

describe('Date Component', () => {
  it('renders correctly enzyme', () => {
  const wrapper = shallow(<Date />)

  expect(toJson(wrapper)).toMatchSnapshot();
  });
   
   it('should have correct props', () => {
      Date.propTypes = {
         day: PropTypes.string.isRequired,
         date: PropTypes.string.isRequired,
         hidden: PropTypes.bool.isRequired,
         active: PropTypes.bool.isRequired
      };
      const wrapper = shallow(<Date day='Senin' date='23' active={false} hidden={true} />);
       expect(wrapper.props().day).toEqual('Senin');
       expect(wrapper.props().date).toEqual('23');
       expect(wrapper.props().hidden).toEqual(true);
       expect(wrapper.props().active).toEqual(false);
   })
});