import { createSelector } from "reselect";


export const selectReducer = (state) => state.tytle

export const selectTitle = createSelector(
   [selectReducer],
   (tytle) =>tytle.tytles 
)

