import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Date from '../date/date.component';
import { DatePickerWrapper, DatePickerContainer } from './date-picker.styles';
import { getNext2Weeks, getShortDateString } from '../../utils/date.utils';
import { _changeDate } from '../../redux/app/app-action';

const DatePicker = () => {
   /*************** SelectedDate Manipulation******************/
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

   /*************** DatePicker Swipe left/right Behaviour******************/

   //useRef
   const targetRef = useRef(null);
   const containerRef = useRef(null);

   //useState
   const [pos, setPos] = useState(0);
   const [initPos, setInitPos] = useState(0);
   const [lastPos, setLastPos] = useState(0);
   const [swipe, setSwipe] = useState(false);
   const [targetWidth, setTargetWidth] = useState(0);
   const [containerWidth, setContainerWidth] = useState(0);
   //useEffect

   useEffect(() => {
      if (targetRef) {
         setTargetWidth(targetRef.current.offsetWidth);
      }
      if (containerRef) {
         // setTargetWidth(containerRef.current.scrollWidth);
         setContainerWidth(containerRef.current.offsetWidth);
      }
   }, []);

   useEffect(() => {
      if (swipe) {
         window.addEventListener('touchend', touchEndHandle);
         window.addEventListener('touchmove', touchMoveHandle);
      }
      return () => {
         window.removeEventListener('touchend', touchEndHandle);
         window.removeEventListener('touchmove', touchMoveHandle);
      };
   }, [swipe]);
   //custom handle
   const touchStartHandle = (e) => {
      setSwipe(true);
      setLastPos(pos);
      setInitPos(e.targetTouches[0].pageX);
   };

   const touchMoveHandle = (e) => {
      if (swipe) {
         let checkPos = Math.floor(
            lastPos + initPos - e.targetTouches[0].pageX
         );

         if (checkPos < 0) {
            checkPos = 0;
         } else if (checkPos > targetWidth - containerWidth) {
            checkPos = targetWidth - containerWidth;
         }
         return setPos(checkPos);
      }
   };

   const touchEndHandle = (e) => {
      setSwipe(false);
   };

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
   return (
      <DatePickerContainer ref={containerRef}>
         <DatePickerWrapper
            ref={targetRef}
            onTouchStart={touchStartHandle}
            style={{ transform: `translateX(${-pos}px)` }}
         >
            {dateElements}
         </DatePickerWrapper>
      </DatePickerContainer>
   );
};

export default DatePicker;
