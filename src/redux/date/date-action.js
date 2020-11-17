import DateActionTypes from './date.types'

export const _changeDate = (date) => ({
   type: DateActionTypes.SELECT_DATE,
   payload: date
})