import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import {
   Address,
   IconWrapper,
   LocationPreviewWrapper,
   TextWrapper,
   Title,
} from './location-preview.styles';

const LocationPreview = ({ location }) => {
   const { name, address } = location;
   return (
      <LocationPreviewWrapper>
         <IconWrapper>
            <LocationIcon fontSize='small' />
         </IconWrapper>
         <TextWrapper>
            <Title>{name}</Title>
            <Address>{address}</Address>
         </TextWrapper>
      </LocationPreviewWrapper>
   );
};

export default LocationPreview;
