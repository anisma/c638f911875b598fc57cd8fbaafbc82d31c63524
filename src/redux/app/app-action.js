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

export const _filterMeals = (item) => ({
   type: AppActionTypes.FILTER_MEALS,
   payload: item
})

export const _getTotalPrice = {
   type: AppActionTypes.GET_TOTAL_PRICE,
}
export const _toggleHiddenLocationModal = {
   type: AppActionTypes.TOGGLE_HIDDEN_LOCATION_MODAL,
}