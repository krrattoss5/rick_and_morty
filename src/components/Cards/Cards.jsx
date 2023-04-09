import React from 'react'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import Pagination from '../Pagination/Pagination';



export default function Cards({ onClose }) {
  const {characters, numPage} = useSelector(s=>s)
  let frm = (numPage-1) * 15;
  let to = numPage * 15;
  const current = characters.slice(frm,to);
  return (
    <>
      {
        current.map(ch =>
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
      <hr></hr>
      <Pagination />
    </>
  )
}