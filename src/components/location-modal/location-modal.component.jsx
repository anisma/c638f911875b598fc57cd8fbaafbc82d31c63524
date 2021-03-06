import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CloseRounded from '@material-ui/icons/CloseRounded';

import {
   CloseButtonWrapper,
   LocationModalcontainer,
   LocationModalWrapper,
   Title,
} from './location-modal.styles';
import LocationInput from '../location-input/loaction-input.component';
import LocationPreview from '../location-preview/location-preview.component';
import { _toggleHiddenLocationModal } from '../../redux/app/app-action';

const LocationModal = () => {
   //useSelector
   const filteredLocation = useSelector((state) => state.app.filteredLocation);

   //useDispatch
   const dispatch = useDispatch();
   const toggleHiddenLocationModal = () => dispatch(_toggleHiddenLocationModal);

   return (
      <LocationModalcontainer>
         <LocationModalWrapper>
            <CloseButtonWrapper>
               <CloseRounded onClick={toggleHiddenLocationModal} />
            </CloseButtonWrapper>
            <Title>Cek makanan yang tersedia di lokasi kamu!</Title>
            <LocationInput />
            {filteredLocation
               ? filteredLocation.map((item, idx) => (
                    <LocationPreview key={idx} location={item} />
                 ))
               : null}
         </LocationModalWrapper>
      </LocationModalcontainer>
   );
};

export default LocationModal;
