import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../Card/Card'
import s from './Favorites.module.css'
import { removeFav,reset,filterCards,orderCards } from '../../redux/actions/actions'

export default function Favorites({onClose}) {
  const dispatch = useDispatch()
  const {myFavorites} = useSelector(state=>state)
  function closeFav(id){
    onClose(id)
    dispatch(removeFav(id))
  }
  function handleOrder(e){
    e.preventDefault()
    dispatch(orderCards(e.target.value))
  }
  function handleFilter(e){
    e.preventDefault()
    dispatch(filterCards(e.target.value))
  }
  return (
    <div className={s.containers}>
    <div className={s.btnContainer}>
      <select className={s.bttn} name='order' onChange={handleOrder} defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disable>Select Oreder</option>
        <option value='Ascendente'>Ascendente</option>
        <option value='Descendente'>Descendente</option>
      </select>
      <select className={s.bttn} name='filterr' onChange={handleFilter} defaultValue={'DEFAULT'}>
        <option value='DEFAULT' disable>Select Gender</option>
        <option value='Male'>Male</option>
        <option value='Female'>Female</option>
        <option value='Genderless'>Genderless</option>
        <option value='Unknow'>Unknow</option>
      </select>
      <button className={s.bttn} onClick={()=>dispatch(reset())}>RESET</button>
    </div>

      {myFavorites && myFavorites.map(ch =>{
        return(
          <Card
            onClose={()=>closeFav(ch.id)}
            id={ch.id}
            key={ch.id}
            name={ch.name}
            status={ch.status}
            species={ch.species}
            gender={ch.gender}
            origin={ch.origin}
            image={ch.image}
          />)
        }
      )
    }
  </div>
  )
}