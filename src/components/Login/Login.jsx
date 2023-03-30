import React, {useState} from 'react'
import s from './Login.module.css'
import imgC from './cabecera-log.png'
import imgE from './email.png'
import imgP from './pasword.png'
import './Login.module.css'

export default function Login({login}) {
  const [errors, setErrors] = useState({})
  const [userData,setUserData] = useState({
    email:'',
    password:''
  })
  function validation(userData){
    let errors = {}
    let regxE = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    let regxP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/i
    if(userData.email.length){
      if(userData.email.length === 0){
        errors.email = 'Este campo no debe estar vacio!'
      }
      if(!regxE.test(userData.email)){
        errors.email = 'Debe ser un email!'
      }
      if(userData.email.length > 35){
        errors.email = 'Superó el numero de caracteres!'
      }
    }else{
      if(!regxP.test(userData.password)){
        errors.password = 'La contraseña no es segura!'
      }
    }
    return errors;
  }
  function handleInput(e){
    setUserData({
      ...userData,
      [e.target.name]:e.target.value
    })
    setErrors(validation({
      ...userData,
      [e.target.name]:e.target.value
  }))
  }
  const err = Object.keys(errors)
  function handleSubmit(e){
    e.preventDefault()
    if(err.length === 0){
      setUserData({
        ...userData,
        email:'',
        password:''
      })
      setErrors({
        ...userData,
        email:'',
        password:''
      })
      return login(userData)
    }
    return alert('Contraseña incorrecta!')
  }
  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit}>
        <img className={s.img} src={imgC} alt='rick-and-morty'/>
        <img className={s.imgL} src={imgE} alt='rick-and-morty'/>
          <input
            className={s.inpt}
            type='text'
            name='email'
            value={userData.email}
            onChange={handleInput}
            placeholder='Escribe un email...'
            required
            />
        <p className={s.danger}>{errors.email}</p>
        <img className={s.imgL} src={imgP} alt='rick-and-morty'/>
          <input
            className={s.inpt}
            type='password'
            name='password'
            value={userData.password}
            onChange={handleInput}
            placeholder='Escribe tu constraseña...'
            required
            />
        <p className={s.danger}>{errors.password}</p>
        <button className={s.bttn} type='submit'>LOGIN</button>
      </form>
    </div>
  )
}
