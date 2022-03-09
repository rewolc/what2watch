export const removeFilm = (state, film) => {
   const newState = state.tytles.filter((i) => i.filmId !== film.filmId)
   
   return {...newState.tytles}
}