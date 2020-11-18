import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ProductRating from '../../../components/product-rating/product-rating.component';

describe('ProductRating Component', () => {
  

   const wrapper = shallow(
         <ProductRating />
   );
   it('should render with given state from Redux store', () => {
      expect(toJson(wrapper)).toMatchSnapshot();
   });
});
