import React, {useState} from 'react'

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
    if(!regxE.test(userData.email)){
      errors.email = 'Debe ser un email!'
    }
    if(!userData.email.length){
      errors.email = 'Este campo no debe estar vacio!'
    }
    if(userData.email.length > 35){
      errors.email = 'Superó el numero de caracteres!'
    }
    if(!
      regxP.test(userData.password)){
      errors.email = 'La contraseña no es segura!'
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
    if(!err.length){
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
    <div>
      <form onSubmit={handleSubmit}>
        <label>EMAIL: </label>
          <input
            type='text'
            name='email'
            value={userData.email}
            onChange={handleInput}
            placeholder='Escribe un email...'
            />
        <p className='danger'>{errors.email}</p>
        <label>PASSWORD: </label>
          <input
            type='password'
            name='password'
            value={userData.password}
            onChange={handleInput}
            placeholder='Escribe tu constraseña...'
            />
        <p className='danger'>{errors.password}</p>
        <button type='submit'>LOGIN</button>
      </form>
    </div>
  )
}
