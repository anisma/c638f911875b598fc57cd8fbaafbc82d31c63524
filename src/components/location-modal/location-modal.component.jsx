import React from 'react';
import CloseRounded from '@material-ui/icons/CloseRounded';

import {
   CloseButtonWrapper,
   LocationModalcontainer,
   LocationModalWrapper,
   Title,
} from './location-modal.styles';
import LocationInput from '../location-input/loaction-input.component';
import LocationPreview from '../location-preview/location-preview.component';

const LocationModal = () => {
   return (
      <LocationModalcontainer>
         <LocationModalWrapper>
            <CloseButtonWrapper>
               <CloseRounded />
            </CloseButtonWrapper>
            <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
            <LocationInput />
            <LocationPreview />
         </LocationModalWrapper>
      </LocationModalcontainer>
   );
};

export default LocationModal;
