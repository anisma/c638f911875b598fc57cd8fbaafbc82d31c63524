import AppActionTypes from './app-types'

export const _changeDate = (date) => ({
   type: AppActionTypes.SELECT_DATE,
   payload: date
})

export const _swipeDatePicker = (pos) => ({
   type: AppActionTypes.SWIPE_DATE_PICKER,
   payload: pos
})

export const _changeMealTime = (time) => ({
   type: AppActionTypes.CHANGE_MEAL_TIME,
   payload: time
})

export const _addToCart = (item) => ({
   type: AppActionTypes.ADD_TO_CART,
   payload: item
})