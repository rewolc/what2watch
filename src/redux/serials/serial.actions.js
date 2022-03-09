import SerialAction from './serial.types'

export const addSerial = (i) => ({
   type : SerialAction.ADD_SERIAL,
   payload : i,
})

export const removeSerial = (i) => ({
   type : SerialAction.REMOVE_SERIAL,
   payload : i,
})