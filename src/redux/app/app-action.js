import AppActionTypes from './app-types'

export const _changeDate = (date) => ({
   type: AppActionTypes.SELECT_DATE,
   payload: date
})

export const _swipeDatePicker = (pos) => ({
   type: AppActionTypes.SWIPE_DATE_PICKER,
   payload: pos
})