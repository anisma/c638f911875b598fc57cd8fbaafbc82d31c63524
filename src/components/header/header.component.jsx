import React from 'react';
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
import { _changeMealTime } from '../../redux/app/app-action';

const Header = () => {
   //useSelector
   const mealTime = useSelector((state) => state.app.mealTime);

   //useDispatch
   const dispatch = useDispatch();
   const changeMealTime = (input) => dispatch(_changeMealTime(input));
   return (
      <HeaderContainer>
         <HeaderWrapper>
            <ArrowBack />
            <LocationWrapper>
               <SubText>alamat pengantar</SubText>
               <Text>
                  Tokopedia tower
                  <ExpandMore fontSize='small' style={{ color: '#f9423a' }} />
               </Text>
            </LocationWrapper>
         </HeaderWrapper>
         <DatePicker />
         <ButtonWrapper>
            <CustomButton
               headerButton
               active={mealTime === 'lunch' ? true : false}
               onClick={() => changeMealTime('lunch')}
            >
               Lunch
            </CustomButton>
            <CustomButton
               headerButton
               active={mealTime === 'dinner' ? true : false}
               onClick={() => changeMealTime('dinner')}
            >
               Dinner
            </CustomButton>
         </ButtonWrapper>
      </HeaderContainer>
   );
};

export default Header;
