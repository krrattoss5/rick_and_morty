import {ADD_FAV,REMOVE_FAV,FILTER,ORDER,RESET,REMOVE_CHARACTER,ADD_CHARACTER,NEXT,PREV} from './types'

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
export function filterCards(g){
  return{
    type:FILTER,
    payload:g
  }
}
export function orderCards(o){
  return{
    type:ORDER,
    payload:o
  }
}
export function reset(){
  return{
    type:RESET
  }
}
export function addCharacter(character){
  return{
    type:ADD_CHARACTER,
    payload:character
  }
}
export function removeCharacter(id){
  return{
    type:REMOVE_CHARACTER,
    payload:id
  }
}
export function next(){
  return{
    type:NEXT
  }
}
export function prev(){
  return{
    type:PREV
  }
}