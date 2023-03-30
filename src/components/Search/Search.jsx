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
    e.target.value = ''
  }
  return (
    <div className={t.container}>
      <form onSubmit={handleSubmit}>
        <label className={t.bord}></label>
        <input className={t.inpt}  type='number' placeholder='Escribe un id...' name='search' onChange={handleChange}/>
        <button type='submit' className={t.bttn} onClick={()=>{onSearch(id)}}>🔍</button>
      </form>
    </div>
  )
}
