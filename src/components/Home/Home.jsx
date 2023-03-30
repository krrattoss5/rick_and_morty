import React from 'react'
import Cards from '../Cards/Cards'
import x from './Home.module.css'

export default function Home({characters, onClose}) {
  return (
    <div>
      <div className={x.container}>
        <Cards characters={characters} onClose={onClose}/>
      </div>
    </div>
  )
}
