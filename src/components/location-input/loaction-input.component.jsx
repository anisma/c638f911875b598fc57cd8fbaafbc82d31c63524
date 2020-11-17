import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import {
   IconWrapper,
   LocationInputWrapper,
   SearchInput,
} from './location-input.styles';
import { _filterLocation } from '../../redux/app/app-action';

const LocationInput = ({}) => {
   //useDispatch
   const dispatch = useDispatch();
   const filterLocation = (input) => dispatch(_filterLocation(input));

   //useRef
   const targetRef = useRef(null);

   //useState
   const [value, setValue] = useState('');

   //useEffect
   useEffect(() => {
      filterLocation(value);
   }, [value]);

   //custom handle
   const keyDownHandle = (e) => {
      setValue(targetRef.current.value);
   };

   return (
      <LocationInputWrapper>
         <SearchInput
            ref={targetRef}
            placeholder='please type kulina to see test data'
            onChange={(e) => keyDownHandle(e)}
         />
         <IconWrapper>
            <LocationIcon fontSize='small' />
         </IconWrapper>
      </LocationInputWrapper>
   );
};

export default LocationInput;
