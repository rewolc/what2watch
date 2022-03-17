export const addToFav = (state, id) => {
  const newState = state.map((i) =>
    i.filmId === id ? { ...i, isFav: "yes" } : i
  );
  return [...newState];
};

export const delFav = (state, id) => {
  const newState = state.map((i) =>
    i.filmId === id ? { ...i, isFav: "no" } : i
  );
  return [...newState];
};

export const checkFav = (state) => {
  const displayState = state.map((i) =>
    i.isFav !== "yes" ? { ...i, display: !i.display } : i
  );
  return [...displayState];
};
