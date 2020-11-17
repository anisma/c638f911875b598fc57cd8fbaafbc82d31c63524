import React from 'react';
import { useDispatch } from 'react-redux';
import { _addToCart, _getTotalPrice } from '../../redux/app/app-action';
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

const Card = ({ meal }) => {
   const { rating, price, name, resto, image, id } = meal;

   //useDispatch
   const dispatch = useDispatch();
   const addToCart = (input) => dispatch(_addToCart(input));
   const getTotalPrice = () => dispatch(_getTotalPrice);

   const numberWithCommas = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   };
   return (
      <CardWrapper>
         <Image image={image} />
         <CardBody>
            <ProductRating rate={rating} />
            <Title>{name}</Title>
            <Subtitle>by kulina &#8226; {resto}</Subtitle>
            <BottomWrapper>
               <Price>Rp {numberWithCommas(price)}</Price>
               <CustomButton
                  addButton
                  onMouseDown={() => addToCart(meal)}
                  onClick={getTotalPrice}
               >
                  add +
               </CustomButton>
            </BottomWrapper>
         </CardBody>
      </CardWrapper>
   );
};

export default Card;
