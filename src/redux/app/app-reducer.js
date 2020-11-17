import AppActionTypes from './app-types'
import {MEAL_DATA} from './MEAL_DATA'
const date = new Date

const test = MEAL_DATA.filter((meal)=> meal.category.includes('lunch'))
console.log(test)

const INITIAL_DATA = {
   selectedDate: date.toString(),
   datePickerPosition: 0,
   mealTime: 'lunch',
   meals: MEAL_DATA,
   cart: [],
   totalPrice: 0,
   totalCartItem:0, 
};

const appReducer = (state = INITIAL_DATA, action) => {
   switch (action.type) {
      case AppActionTypes.SELECT_DATE:
         return {
            ...state,
            selectedDate: action.payload.toString()
         };

      case AppActionTypes.SWIPE_DATE_PICKER:
         return {
            ...state,
            datePickerPosition: action.payload
         }
      case AppActionTypes.CHANGE_MEAL_TIME:
         return {
            ...state,
            mealTime: action.payload,
         }
      
      case AppActionTypes.FILTER_MEALS:
        return {
             ...state,
            meals: MEAL_DATA.filter((meal)=> meal.category.includes(action.payload))
         }
      case AppActionTypes.ADD_TO_CART:
         return {
            ...state,
            cart: addItemToCart(state.cart, action.payload),
         }
         
      case AppActionTypes.GET_TOTAL_PRICE:
         return {
            ...state,
            totalPrice: state.cart.map(item => item.price * item.quantity).reduce((accumulator, price) => accumulator + price, 0),
            totalCartItem: state.cart.map(item => item.quantity).reduce((accumulator, quantity) => accumulator + quantity, 0)
      }
     
      default:
         return state;
   }
};

export default appReducer;

export const addItemToCart = (cartItems, cartItemToAdd) => {
   const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToAdd.id
   );
   if (existingCartItem) {
      return cartItems.map((cartItem) =>
         cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
      );
   }

   return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};