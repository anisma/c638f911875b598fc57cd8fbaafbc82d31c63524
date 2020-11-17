import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Date from '../date/date.component';
import { DatePickerWrapper } from './date-picker.styles';
import { getNext2Weeks, getShortDateString } from '../../utils/date.utils';
import { _changeDate } from '../../redux/app/app-action';

const DatePicker = () => {
   //useSelector
   const selectedDate = useSelector((state) => state.app.selectedDate);

   //useDispatch
   const dispatch = useDispatch();
   const selectDate = (date) => dispatch(_changeDate(date));

   //useState
   const [twoWeeksDate] = useState(getNext2Weeks());
   const [selectedDateString, setSelectedDateString] = useState('');

   // useEffect
   useEffect(() => {
      const dateStr = getShortDateString(selectedDate);
      setSelectedDateString(dateStr);
   }, [selectedDate]);

   //dateElements
   const dateElements = twoWeeksDate.map((d, i) => {
      const fullDateString = d.fullDate.toDateString();
      const date = d.fullDate.toString();
      const hidden = d.day === 'MIN' || d.day === 'SAB' ? true : false;

      return (
         <Date
            key={i}
            day={d.day}
            date={d.date}
            hidden={hidden}
            active={
               !hidden && fullDateString === selectedDateString ? true : false
            }
            onClick={() => {
               if (!hidden) {
                  selectDate(date);
               }
            }}
         />
      );
   });

   return <DatePickerWrapper>{dateElements}</DatePickerWrapper>;
};

export default DatePicker;
