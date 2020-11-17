import React from 'react';
import CloseRounded from '@material-ui/icons/CloseRounded';

import {
   CloseButtonWrapper,
   LocationModalcontainer,
   LocationModalWrapper,
   Title,
} from './location-modal.styles';

const LocationModal = () => {
   return (
      <LocationModalcontainer>
         <LocationModalWrapper>
            <CloseButtonWrapper>
               <CloseRounded />
            </CloseButtonWrapper>
            <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
         </LocationModalWrapper>
      </LocationModalcontainer>
   );
};

export default LocationModal;
