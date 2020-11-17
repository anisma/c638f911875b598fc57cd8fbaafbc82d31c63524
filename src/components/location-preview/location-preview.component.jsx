import React from 'react';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import {
   Address,
   IconWrapper,
   LocationPreviewWrapper,
   TextWrapper,
   Title,
} from './location-preview.styles';

const LocationPreview = () => {
   return (
      <LocationPreviewWrapper>
         <IconWrapper>
            <LocationIcon fontSize='small' />
         </IconWrapper>
         <TextWrapper>
            <Title>dfkadf</Title>
            <Address>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Explicabo aperiam natus cupiditate fugit maiores sunt distinctio
               vel doloribus molestias et!
            </Address>
         </TextWrapper>
      </LocationPreviewWrapper>
   );
};

export default LocationPreview;
