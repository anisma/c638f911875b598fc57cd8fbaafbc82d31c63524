import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ExpandMore from '@material-ui/icons/ExpandMore';

import {
   HeaderContainer,
   HeaderWrapper,
   LocationWrapper,
   Text,
   SubText,
} from './header.styles';
import DatePicker from '../date-picker/date-picker.component';

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
      </HeaderContainer>
   );
};

export default Header;
