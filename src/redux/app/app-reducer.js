import AppActionTypes from './app-types'
import {MEAL_DATA} from './MEAL_DATA'
const date = new Date

const INITIAL_DATA = {
   selectedDate: date.toString(),
   datePickerPosition: 0,
   mealTime: 'lunch',
   meals: MEAL_DATA
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
            mealTime: action.payload
         }
     
      default:
         return state;
   }
};

export default appReducer;