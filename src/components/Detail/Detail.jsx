import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import s from './Detail.module.css'


export default function Detail() {
  const {id} = useParams()
  const [character, setCharacter] = useState({})
  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(r => r.json())
    .then(data =>{
      if(data.name){
        setCharacter(data)
      }else{
        window.alert('El personaje no tiene datos!!')
      }
    })
    .catch(error=>window.alert('No hay personajes con este ID!'))
    return setCharacter({});
  },[id])
  console.log(character)
  return (
    <div className={s.containerOut}>
      <div className={s.container}>
        <div>
            <img className={s.Image} src={character.image} alt={character.name} />
        </div>
        <div>
          <h2>{character.name}</h2>
          <p><strong>Status: </strong>{character.status}</p>
          <p><strong>Species: </strong>{character.species}</p>
          <p><strong>Gender: </strong>{character.gender}</p>
          <p><strong>Origin: </strong>{character.origin?.name}</p>
        </div>
      </div>
    </div>
  )
}
