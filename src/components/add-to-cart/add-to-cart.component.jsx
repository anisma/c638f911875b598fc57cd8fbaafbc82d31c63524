import React from 'react';
import { useSelector } from 'react-redux';
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
   //useSelector
   const totalCartItem = useSelector((state) => state.app.totalCartItem);
   const totalPrice = useSelector((state) => state.app.totalPrice);

   //useDispatch

   const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   };
   return (
      <AddToCartContainer>
         <AddToCartWrapper>
            <Content>
               <TextWrapper>
                  {totalCartItem} items | Rp {numberWithCommas(totalPrice)}
               </TextWrapper>
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
