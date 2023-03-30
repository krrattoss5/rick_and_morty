import React from 'react'
import Card from '../Card/Card'



export default function Cards({characters, onClose}) {
  return (
    <>
      {
        characters.map(ch =>
          <Card
              onClose={onClose}
              id={ch.id}
              key={ch.id}
              name={ch.name}
              status={ch.status}
              species={ch.species}
              gender={ch.gender}
              origin={ch.origin}
              image={ch.image}
          />
        )
      }
    </>
  )
}