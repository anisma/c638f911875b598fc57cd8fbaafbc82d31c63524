import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AddToCart from '../../components/add-to-cart/add-to-cart.component';
import Card from '../../components/card/card.component';
import { _filterMeals } from '../../redux/app/app-action';
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
   const cart = useSelector((state) => state.app.cart);

   //useDispatch
   const dispatch = useDispatch();
   const filterMeals = (input) => dispatch(_filterMeals(input));

   //useEffect
   useEffect(() => {
      filterMeals(mealTime);
   }, []);

   const todaysDate = getTodaysDate();

   return (
      <OrderPageWrapper>
         <ContentWrapper>
            <DateWrapper>{todaysDate}</DateWrapper>
            {meals.map((meal) => (
               <Card key={meal.id} meal={meal} />
            ))}
         </ContentWrapper>
         {cart.length > 0 && <AddToCart />}
      </OrderPageWrapper>
   );
};

export default OrderPage;
