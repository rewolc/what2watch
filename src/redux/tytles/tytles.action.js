import TytlesAction from "./tytles.types";
export const removeFilm = (i) => ({
  type: TytlesAction.REMOVE_FILM,
  payload: i,
});

