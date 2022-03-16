import TytlesAction from "./tytles.types";
export const removeFilm = (i) => ({
  type: TytlesAction.REMOVE_FILM,
  payload: i,
});
export const addToFav = (i) => ({
  type: TytlesAction.ADD_FAV,
  payload: i,
});
export const dellFromFav = (i) => ({
  type: TytlesAction.DEL_FAV,
  payload: i,
});
export const addFilm = (i) => ({
  type: TytlesAction.ADD_FILM,
  payload: { ...i, isFav: "no", display : 'true' },
});
