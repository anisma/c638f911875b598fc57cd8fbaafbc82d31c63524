import React from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCartOutlined';
import ChevronRight from '@material-ui/icons/ChevronRight';
import {
   AddToCartContainer,
   AddToCartWrapper,
   Content,
   SubText,
   TextWrapper,
   WrapperRight,
} from './add-to-cart.styles';

const AddToCart = () => {
   return (
      <AddToCartContainer>
         <AddToCartWrapper>
            <Content>
               <TextWrapper>5 items | Rp 125,000</TextWrapper>
               <SubText>Termasuk Ongkos Kirim</SubText>
            </Content>
            <WrapperRight>
               <ShoppingCart />
               <ChevronRight />
            </WrapperRight>
         </AddToCartWrapper>
      </AddToCartContainer>
   );
};

export default AddToCart;
