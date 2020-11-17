import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddToCart from '../../components/add-to-cart/add-to-cart.component';
import Card from '../../components/card/card.component';
import { getTodaysDate } from '../../utils/date.utils';
import {
   ContentWrapper,
   DateWrapper,
   OrderPageWrapper,
} from './order-page.styles';

const OrderPage = () => {
   //useSelector
   const meals = useSelector((state) => state.app.meals);
   const mealTime = useSelector((state) => state.app.mealTime);
   const todaysDate = getTodaysDate();

   return (
      <OrderPageWrapper>
         <ContentWrapper>
            <DateWrapper>{todaysDate}</DateWrapper>
            {meals.map((meal) => (
               <Card key={meal.id} meal={meal} />
            ))}
         </ContentWrapper>
         <AddToCart />
      </OrderPageWrapper>
   );
};

export default OrderPage;
