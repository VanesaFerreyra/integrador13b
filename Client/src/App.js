import './App.css';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import Form from './components/Form/Form';
import Favorites from "./components/Favorites/Favorites";

function App() {
   const { pathname } = useLocation();
   
   const navigate = useNavigate();

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);

   const URL = 'http://localhost:3001/rickandmorty/'
   
   async function login ({email, password}){
      try {
         const { data } = await axios(`${URL}login?email=${email}&password=${password}`)
      
         const { access } = data;
         setAccess(access)
         access && navigate('/home')
      } catch (error) {
         //console.log(error);
         alert('Usuario y/o contraseña incorrecta')
      }
   }

   useEffect(()=>{
      !access && navigate('/')
   },[access])
   
   const onSearch = async (id) => {
      if(!id)alert("Ingrese un ID")
      if(characters.find(char => char.id === parseInt(id))){
         alert(`Ya existe el personaje con el id ${id}`)
         return;
      }
      try {
         const{ data } = await axios(`${URL}character/${id}`)

         setCharacters(oldChars => [...oldChars, data])

      } catch (error) {
         alert(error.response.data)
      }
   }
//funcion onSearch con axios
  // const onSearch = (id) => {
//   fetch(`https://localhost:3001/rickandmorty/character/${id}`)
//      .then(response => response.json)
 //     .then(( data ) => {
 //        if (data.name) {
 //         setCharacters((oldChars) => [...oldChars, data]);
 //      }else{
 //        alert(No se encontro ese ID)
 //      }
 //     })
//}
 
   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== id ))
   }


   return (
      <div className='App'>
         { pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path="/" element={<Form login ={login}/>} />
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="*" element={<Error404 />} />
         </Routes>
         
      </div>
   );
}

export default App;
