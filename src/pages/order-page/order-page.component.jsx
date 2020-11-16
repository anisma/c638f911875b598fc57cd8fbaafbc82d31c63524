import React from 'react';
import Card from '../../components/card/card.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {
   ButtonWrapper,
   ContentWrapper,
   DateWrapper,
   OrderPageWrapper,
} from './order-page.styles';

const OrderPage = () => {
   return (
      <OrderPageWrapper>
         <ButtonWrapper>
            <CustomButton headerButton active>
               Lunch
            </CustomButton>
            <CustomButton headerButton>Dinner</CustomButton>
         </ButtonWrapper>
         <ContentWrapper>
            <DateWrapper>Kamis, 14 November 2020</DateWrapper>
            <Card />
         </ContentWrapper>
      </OrderPageWrapper>
   );
};

export default OrderPage;
