import React from 'react';
import Date from '../date/date.component';
import { DatePickerWrapper } from './date-picker.styles';

const DatePicker = () => {
   return (
      <DatePickerWrapper>
         <Date />
         <Date />
         <Date />
         <Date hidden />
         <Date hidden />
         <Date active />
         <Date />
         <Date />
         <Date />
         <Date />
         <Date />
      </DatePickerWrapper>
   );
};

export default DatePicker;
