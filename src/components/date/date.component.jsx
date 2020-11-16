import React from 'react';

import { DateWrapper, Date as DateNumber, Day } from './date.styles';

const Date = (props) => {
   return (
      <DateWrapper {...props}>
         <Day>Sen</Day>
         <DateNumber>24</DateNumber>
      </DateWrapper>
   );
};

export default Date;
