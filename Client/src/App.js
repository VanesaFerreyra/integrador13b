import './App.css';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Error404 from './components/Error404/Error404';
import Form from './components/Form/Form';

function App() {
   const [characters, setCharacters] = useState([])
   
   
   const onSearch = (id) => {
      if(!id)alert("Ingrese un ID")
      if(characters.find(char => char.id === parseInt(id))){
         alert(`Ya existe el personaje con el id ${id}`)
         return;
      }
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }
      }).catch(err => alert(err.response.data.error));
   }
//funcion onSearch con fetch
  // const onSearch = (id) => {
   //   fetch(`https://rickandmortyapi.com/api/character/${id}`)
   //   .then(response => response.json)
   //   .then(( data ) => {
   //      if (data.name) {
   //       setCharacters((oldChars) => [...oldChars, data]);
   //    }else{
      //    alert(!No hay personaje con este ID!)
   //    }
   //   })
   //}
 
   function onClose(id) {
      setCharacters(characters.filter(char => char.id !== id ))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} />
         <Routes>
            <Route path="/" element={<Form/>} />
            <Route path="/home" element={
               <Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="*" element={<Error404 />} />
         </Routes>
         
      </div>
   );
}

export default App;
