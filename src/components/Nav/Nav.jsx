import React from 'react'
import Search from '../Search/Search'
import s from './Nav.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function Nav({onSearch, logout}) {
  const location = useLocation()
  return (
    <div className={s.container}>
      {
        location.pathname !== '/home' &&  <Link to='/home'><button className={s.bttn}>HOME</button></Link>
      }
      {
        location.pathname !== '/about' && <Link to='/about'><button className={s.bttn}>ABOUT</button></Link>
      }
      {
        location.pathname !== '/favorites' && <Link to='/favorites'><button className={s.bttn}>FAVORITES</button></Link>
      }
      <Search onSearch={onSearch} />
      <button className={s.bttn} onClick={()=>logout()}>LOG OUT!</button>
    </div>
  )
}
