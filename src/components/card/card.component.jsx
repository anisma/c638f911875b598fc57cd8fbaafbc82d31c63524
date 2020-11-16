import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import ProductRating from '../product-rating/product-rating.component';
import {
   BottomWrapper,
   CardBody,
   CardWrapper,
   Image,
   Price,
   Subtitle,
   Title,
} from './card.styles';

const Card = () => {
   return (
      <CardWrapper>
         <Image />
         <CardBody>
            <ProductRating />
            <Title>Roasted Chicken with Scrambled egg</Title>
            <Subtitle>by kulina &#8226; uptown</Subtitle>
            <BottomWrapper>
               <Price>Rp 35,000</Price>
               <CustomButton addButton>add +</CustomButton>
            </BottomWrapper>
         </CardBody>
      </CardWrapper>
   );
};

export default Card;
