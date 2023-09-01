import style from "./SearchBar.module.css";
import { useState } from "react";
export default function SearchBar({onSearch}) {
   const [id, setId]= useState("")

   function handleChange(evento) {
      setId(evento.target.value)
   }
   
   const search = ()=>{//con esta funcion se limpia el
      onSearch(id)     // boton de agregar el id
      setId('')        // y se resuelve un bug
   }                   //se agrega en button onClick

   return (
      <div className={style.container}>
         <input type='search' onChange={handleChange} value= {id} placeholder="ingrese ID..." />
         <button onClick={search} className={style.containerBtn}>🔎</button>
      </div>
   );
}
