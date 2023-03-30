import {ADD_FAV,REMOVE_FAV} from './actions/types'
const initialState = {
  myFavorites:[]
}

export default function rootReducer(state=initialState,{type,payload}){
  switch(type){
    case ADD_FAV:
      return{
        ...state,
        myFavorites:[...state.myFavorites, payload]
      };
     case REMOVE_FAV:
      let filt = state.myFavorites.map(ch=>ch.id!==payload)
      return {
        ...state,
        myFavorites:filt
      };
    default:
      return state;
  }
}