import React from 'react';
import Date from '../date/date.component';
import { DatePickerWrapper } from './date-picker.styles';
import { getNext2Weeks } from '../../utils/date.utils';

const DatePicker = () => {
   const twoWeeksDate = getNext2Weeks();
   console.log(twoWeeksDate);
   return (
      <DatePickerWrapper>
         {twoWeeksDate.map((d, i) => (
            <Date
               key={i}
               day={d.day}
               date={d.date}
               hidden={d.day === 'MIN' || d.day === 'SAB' ? true : false}
            />
         ))}
      </DatePickerWrapper>
   );
};

export default DatePicker;
