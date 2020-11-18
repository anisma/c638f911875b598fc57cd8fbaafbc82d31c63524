import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import CustomButton from '../../../components/custom-button/custom-button.component'

describe('CustomButton Component', () => {
  it('renders correctly enzyme', () => {
  const wrapper = shallow(<CustomButton />)

  expect(toJson(wrapper)).toMatchSnapshot();
});
});