import React from 'react';
import CustomButton from '../../components/custom-button/custom-button.component';
import {
   ButtonWrapper,
   ContentWrapper,
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
         <ContentWrapper></ContentWrapper>
      </OrderPageWrapper>
   );
};

export default OrderPage;
