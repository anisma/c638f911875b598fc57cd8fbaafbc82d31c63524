import React, { useState } from 'react';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import {
   IconWrapper,
   LocationInputWrapper,
   SearchInput,
} from './location-input.styles';

const LocationInput = ({ value }) => {
   return (
      <LocationInputWrapper>
         <SearchInput placeholder='please type kulina to see test data' />
         <IconWrapper>
            <LocationIcon fontSize='small' />
         </IconWrapper>
      </LocationInputWrapper>
   );
};

export default LocationInput;
