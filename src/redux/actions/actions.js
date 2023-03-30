import {ADD_FAV,REMOVE_FAV} from './types'

export function addFav(p){
  return{
    type:ADD_FAV,
    payload:p
  }
}
export function removeFav(id){
  return{
    type:REMOVE_FAV,
    payload:id
  }
}