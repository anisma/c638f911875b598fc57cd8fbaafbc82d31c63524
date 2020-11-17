import AppActionTypes from './app-types'

export const _changeDate = (date) => ({
   type: AppActionTypes.SELECT_DATE,
   payload: date
})