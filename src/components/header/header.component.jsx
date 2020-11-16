import React from 'react';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ExpandMore from '@material-ui/icons/ExpandMore';

import { HeaderWrapper, LocationWrapper, Text, SubText } from './header.styles';

const Header = () => {
   return (
      <HeaderWrapper>
         <ArrowBack />
         <LocationWrapper>
            <SubText>alamat pengantar</SubText>
            <Text>
               Tokopedia tower
               {/* Lokasi <ExpandMore /> */}
               <ExpandMore fontSize='small' style={{ color: '#f9423a' }} />
            </Text>
         </LocationWrapper>
      </HeaderWrapper>
   );
};

export default Header;
