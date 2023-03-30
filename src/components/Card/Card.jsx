import React, {useState,useEffect} from 'react'
import z from './Card.module.css'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {addFav,removeFav} from '../../redux/actions/actions'

function Card(props) {
  const {id,removeFav,addFav,myFavorites,image,name,status,gender,origin,species,onClose} = props
  const [isFav,setIsFav] = useState(false)
  function handleFavorite(){
    if(isFav){
      setIsFav(false)
      removeFav(id)
    }else{
      setIsFav(true)
      addFav(props)
    }
  }
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
}, [myFavorites]);

  return (
    <div className={z.container}>
      {
        isFav ? (
            <button onClick={handleFavorite}>❤️</button>
        ) : (
            <button onClick={handleFavorite}>🤍</button>
        )
      }
      <button className={z.bttn} onClick={()=>onClose(id)}>X</button>
      <Link to={`detail/${id}`}>
        <div>
          <img className={z.imge} src={image} alt={name} />
        </div>
        <h2>{name}</h2>
        <p><strong>Status: </strong>{status}</p>
        <p><strong>Species: </strong>{species}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Origin: </strong>{origin?.name}</p>
      </Link>
    </div>
  )
}

export function mapDispatchToProps(dispatch){
  return{
    addFav:(p)=>dispatch(addFav(p)),
    removeFav:(id)=>dispatch(removeFav(id))
  }
};
export function mapStateToProps(state){
  return{
    myFavorites:state.myFavorites
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Card)