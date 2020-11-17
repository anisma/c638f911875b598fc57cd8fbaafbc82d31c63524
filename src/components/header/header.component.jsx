import React from 'react';
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

const Header = () => {
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
            <CustomButton headerButton active>
               Lunch
            </CustomButton>
            <CustomButton headerButton>Dinner</CustomButton>
         </ButtonWrapper>
      </HeaderContainer>
   );
};

export default Header;
