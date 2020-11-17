import React from 'react';
import AddToCart from '../../components/add-to-cart/add-to-cart.component';
import Card from '../../components/card/card.component';
import {
   ContentWrapper,
   DateWrapper,
   OrderPageWrapper,
} from './order-page.styles';

const OrderPage = () => {
   return (
      <OrderPageWrapper>
         <ContentWrapper>
            <DateWrapper>Kamis, 14 November 2020</DateWrapper>
            <Card />
            <Card />
            <Card />
            <Card />
         </ContentWrapper>
         <AddToCart />
      </OrderPageWrapper>
   );
};

export default OrderPage;
