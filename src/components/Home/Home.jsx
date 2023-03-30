import React from 'react'
import Cards from '../Cards/Cards'
import x from './Home.module.css'

export default function Home({characters, onClose}) {
  return (
    <div className={x.bdy1}>
      <div className={x.container}>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}
