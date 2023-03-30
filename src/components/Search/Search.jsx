import React from 'react'
import { useState } from 'react'
import t from './Search.module.css'

export default function Search({onSearch}) {
  const [id, setId] = useState('')
  function handleChange(e){
    setId(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    e.target.value = '';
    return alert('ok!')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={t.inpt}  type='search' placeholder='Escribe un id...' name='search' onChange={handleChange}/>
        <button type='submit' className={t.bttn} onClick={()=>{onSearch(id)}}>AGREGAR</button>
      </form>
    </div>
  )
}
