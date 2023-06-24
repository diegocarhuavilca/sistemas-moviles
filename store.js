import { createStore } from "redux";

const initialState = {
  user: null, // Initially, no user is logged in
  favorites: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "ADD_FAVORITE":
      if (state.favorites.some((value) => value == action.payload))
        return state;
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    case "REMOVE_FAVORITE":
      let favoritesAux = state.favorites
      let index = favoritesAux.findIndex((value) => value == action.payload)
      if(index > -1) {
        favoritesAux.splice(index,1)
      }
      return {...state,favorites:[...favoritesAux]}
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
