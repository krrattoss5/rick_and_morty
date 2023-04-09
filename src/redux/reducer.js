 import {ADD_FAV,REMOVE_FAV,FILTER,ORDER,RESET,ADD_CHARACTER,REMOVE_CHARACTER,NEXT,PREV} from './actions/types'
const initialState = {
  numPage:1,
  characters: [],
  myFavorites:[],
  allCharacters:[]
}

export default function rootReducer(state=initialState,{type,payload}){
  switch(type){
    case ADD_CHARACTER:
      if(Array.isArray(payload)){
        let filtro1 = new Set(payload)
        let filtro2 = Array.from(filtro1)
        return{
          ...state,
          characters:filtro2
        };
      }
      return{
        ...state,
        characters:[payload, ...state.characters]
      };
    case REMOVE_CHARACTER:
      let filtChar = state.characters.filter(ch=>ch.id!==payload)
      return {
        ...state,
        characters:filtChar,
      };
    case ADD_FAV:
      return{
        ...state,
        myFavorites:[...state.allCharacters, payload],
        allCharacters:[...state.allCharacters, payload]
      };
    case REMOVE_FAV:
      let filt = state.allCharacters.filter(ch=>ch.id!==payload)
      return {
        ...state,
        myFavorites:filt,
        allCharacters:filt
      };
    case FILTER:
      let filtCard = state.allCharacters.filter(ch=>ch.gender===payload)
      return {
        ...state,
        myFavorites:filtCard
      };
    case RESET:
      return {
        ...state,
        myFavorites:[...state.allCharacters]
      };
      case NEXT:
        return {
          ...state,
          numPage:state.numPage + 1
        };
      case PREV:
        return {
          ...state,
          numPage:state.numPage - 1
        };
      case ORDER:
        let orderCard = state.allCharacters.sort((a,b) => {
          if(a.id<b.id){
            return 'Ascendente' === payload?-1:1;
          }
          if(a.id>b.id){
            return 'Descendente' === payload?-1:1;
          }
          return 0;
        });
        return {
        ...state,
        myFavorites:orderCard
      };
    default:
      return state;
  }
}