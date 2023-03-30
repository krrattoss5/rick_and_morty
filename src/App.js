import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';

function App() {
  const EMAIL = 'rick@test.com'
  const PASSWORD = '19568514Lj'
  const [access,setAccess] = useState(false)
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate()
  const location = useLocation()

  function login(userData){
    if(userData.email===EMAIL
      && userData.password===PASSWORD){
        setAccess(true)
        navigate('/home')
      }
  }
  function logout(){
    setAccess(false)
    navigate('/')
  }

  function onSearch(id){
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      if(data.name){
        if(characters.find(ch => ch.id === data.id)){
          return alert('El personaje ya esta renderizado!')
        }else{
          setCharacters((oldChars)=>[...oldChars, data])
        }
      }else{
        alert('Este id no se encuentra!')
      }
    })
  }
  function onClose(id){
    setCharacters(characters.filter(ch => ch.id !== id))
  }
  useEffect(()=>{
    !access && navigate('/');
  },[access])

  return (
    <div className="App">
      {location.pathname !== '/'?<Nav onSearch={onSearch} logout={logout} />:null}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
        <Route path='/' element={<Login login={login}/>} />
        <Route path='/home/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Home characters={characters} onClose={onClose}/>} />
      </Routes>
    </div>
  );
}

export default App;
