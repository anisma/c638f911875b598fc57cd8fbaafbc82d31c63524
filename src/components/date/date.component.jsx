import React from 'react';

import { DateWrapper, Date as DateNumber, Day } from './date.styles';

const Date = (props) => {
   const { day, date } = props;
   return (
      <DateWrapper {...props}>
         <Day>{day}</Day>
         <DateNumber>{date}</DateNumber>
      </DateWrapper>
   );
};

export default Date;
