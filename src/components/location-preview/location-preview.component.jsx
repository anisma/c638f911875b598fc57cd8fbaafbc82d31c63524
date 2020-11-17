import React from 'react';
import { useDispatch } from 'react-redux';
import LocationIcon from '@material-ui/icons/LocationOnRounded';
import {
   Address,
   IconWrapper,
   LocationPreviewWrapper,
   TextWrapper,
   Title,
} from './location-preview.styles';
import {
   _selectLocation,
   _toggleHiddenLocationModal,
} from '../../redux/app/app-action';

const LocationPreview = ({ location }) => {
   const { name, address } = location;

   //useDispatch
   const dispatch = useDispatch();
   const selectLocation = (input) => dispatch(_selectLocation(input));
   const toggleHiddenLocationModal = () => dispatch(_toggleHiddenLocationModal);
   return (
      <LocationPreviewWrapper
         onClick={() => {
            selectLocation(location);
            toggleHiddenLocationModal();
         }}
      >
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
