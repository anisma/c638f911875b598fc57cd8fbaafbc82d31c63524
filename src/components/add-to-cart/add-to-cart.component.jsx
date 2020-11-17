import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { _addToCart } from '../../redux/app/app-action';

const AddToCart = () => {
   //useSelector
   const cart = useSelector((state) => state.app.cart);

   //useDispatch
   const dispatch = useDispatch();
   const addToCart = (input) => dispatch(_addToCart(input));
   return (
      <AddToCartContainer>
         <AddToCartWrapper>
            <Content>
               <TextWrapper>{cart.lenght} items | Rp 125,000</TextWrapper>
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
