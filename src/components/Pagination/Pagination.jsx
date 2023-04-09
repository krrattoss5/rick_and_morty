import React from 'react'
import s from './Pagination.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { next, prev } from '../../redux/actions/actions';

export default function Pagination() {
  const {numPage} = useSelector(s=>s);
  const dispatch = useDispatch();
  function nextP(){
    dispatch(next())
  }
  function prevP(){
    dispatch(prev())
  }
  return (
    <div className={s.container}>
      {numPage === 1?null:<button onClick={prevP} className={s.bttn}>PREV</button>}
      <p className={s.text}>{numPage}</p>
      <button onClick={nextP} className={s.bttn}>NEXT</button>
    </div>
  )
}
