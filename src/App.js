import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, removeCharacter } from './redux/actions/actions';

function App() {
  const EMAIL = 'rick@test.com'
  const PASSWORD = '19568514Lj'
  const [access,setAccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const {characters} = useSelector(s=>s)

  useEffect(()=>{
    !access && navigate('/');
  },[access, navigate]);

  useEffect(()=>{
    const requests = [];

    for (let index = 1; index < 42; index++) {
      requests.push(
        axios.get(`https://rickandmortyapi.com/api/character?page=${index}`)
        )
      }

      Promise.all(requests).then(results =>{
        var newCharacters = [];
        results.forEach(result => newCharacters=[...newCharacters, ...result.data.results])
        let filtro = new Set(newCharacters)
        dispatch(addCharacter(Array.from(filtro)))
    })
      .catch(error=>{})
    },[dispatch]);

    function onSearch(id){
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.json())
      .then(data => {
        if(data.name){
          if(characters.find(ch => ch.id === data.id)){
            return alert('El personaje ya esta renderizado!')
          }else{
            dispatch(addCharacter(data))
          }
        }else{
        alert('Este id no se encuentra!')
      }
    })
  }
  function onClose(id){
    dispatch(removeCharacter(id))
  }
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
    return (
      <div className="App">
      {location.pathname !== '/'?<Nav onSearch={onSearch} logout={logout} />:null}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
        <Route path='/' element={<Login login={login}/>} />
        <Route path='/home/detail/:id' element={<Detail />} />
        <Route path='/home' element={<Home onClose={onClose}/>} />
      </Routes>
    </div>
  );
}

export default App;
