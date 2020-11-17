import React from 'react';
import StarBorder from '@material-ui/icons/StarBorderRounded';
import Star from '@material-ui/icons/StarRounded';
import StarHalf from '@material-ui/icons/StarHalfRounded';

import { ProductRatingWrapper, RatingValue } from './product-rating.styles';

const ProductRating = ({ rate }) => {
   const stars = [];
   let rating = rate;
   let counter = 5;
   while (counter > 0) {
      if (rating >= 1) {
         stars.push(<Star fontSize='small' style={{ color: '#f9423a' }} />);
      } else if (rating < 1 && rating > 0) {
         stars.push(<StarHalf fontSize='small' style={{ color: '#f9423a' }} />);
      } else {
         stars.push(
            <StarBorder fontSize='small' style={{ color: '#f9423a' }} />
         );
      }
      rating--;
      counter--;
   }

   return (
      <ProductRatingWrapper>
         <RatingValue>{parseFloat(rate).toFixed(1)}</RatingValue>
         {stars}
      </ProductRatingWrapper>
   );
};

export default ProductRating;
