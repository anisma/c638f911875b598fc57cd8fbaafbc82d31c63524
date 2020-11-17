import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import {
   IconWrapper,
   LocationInputWrapper,
   SearchInput,
} from './location-input.styles';

const LocationInput = () => {
   return (
      <LocationInputWrapper>
         <SearchInput />
         <IconWrapper>
            <LocationIcon fontSize='small' />
         </IconWrapper>
      </LocationInputWrapper>
   );
};

export default LocationInput;
