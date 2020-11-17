import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ArrowBack from '@material-ui/icons/ArrowBack';
import ExpandMore from '@material-ui/icons/ExpandMore';

import {
   HeaderContainer,
   HeaderWrapper,
   LocationWrapper,
   Text,
   SubText,
   ButtonWrapper,
} from './header.styles';
import DatePicker from '../date-picker/date-picker.component';
import CustomButton from '../custom-button/custom-button.component';
import {
   _changeMealTime,
   _filterMeals,
   _toggleHiddenLocationModal,
} from '../../redux/app/app-action';

const Header = () => {
   //useSelector
   const mealTime = useSelector((state) => state.app.mealTime);
   const selectedLocation = useSelector((state) => state.app.selectedLocation);

   //useDispatch
   const dispatch = useDispatch();
   const changeMealTime = (input) => dispatch(_changeMealTime(input));
   const filterMeals = (input) => dispatch(_filterMeals(input));
   const toggleHiddenLocationModal = (input) =>
      dispatch(_toggleHiddenLocationModal);

   //useState
   const [hideButton, setHidenButton] = useState(false);

   //useEffect
   useEffect(() => {
      const checkScrollPos = () => {
         if (window.scrollY > 0) {
            setHidenButton(true);
         } else {
            setHidenButton(false);
         }
      };
      window.addEventListener('scroll', checkScrollPos);

      return () => {
         window.removeEventListener('scroll', checkScrollPos);
      };
   }, []);
   return (
      <HeaderContainer>
         <HeaderWrapper>
            <ArrowBack />
            <LocationWrapper>
               <SubText>alamat pengantar</SubText>
               <Text onClick={toggleHiddenLocationModal}>
                  {selectedLocation
                     ? selectedLocation
                     : 'Pilih alamat pengantar'}
                  <ExpandMore fontSize='small' style={{ color: '#f9423a' }} />
               </Text>
            </LocationWrapper>
         </HeaderWrapper>
         <DatePicker />
         {!hideButton && (
            <ButtonWrapper>
               <CustomButton
                  headerButton
                  active={mealTime === 'lunch' ? true : false}
                  onMouseDown={() => {
                     changeMealTime('lunch');
                  }}
                  onClick={() => filterMeals(mealTime)}
               >
                  Lunch
               </CustomButton>
               <CustomButton
                  headerButton
                  active={mealTime === 'dinner' ? true : false}
                  onMouseDown={() => {
                     changeMealTime('dinner');
                  }}
                  onClick={() => filterMeals(mealTime)}
               >
                  Dinner
               </CustomButton>
            </ButtonWrapper>
         )}
      </HeaderContainer>
   );
};

export default Header;
