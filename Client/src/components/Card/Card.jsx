import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions/actions";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Card({
   id,
   name,
   status,
   species,
   origin,
   gender,
   image,
   onClose,
   addFav,
   removeFav,
   allCharacters
}) {
   const { pathname }= useLocation()
   const [ isFav, setIsFav] = useState(false);
   
   useEffect(()=>{
      allCharacters.forEach(charFav => {
         if(charFav.id === id){
            setIsFav(true);
         } 
      })
   },[allCharacters])
   
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         removeFav(id)
      }else{
         setIsFav(true)
         addFav({
            id,
            name,
            status,
            species,
            origin,
            gender,
            image,
         })
      }
   };
   return (
      <div className= {style.container}>
         <div className={style.buttonContainer}>
         {pathname=== '/home' && <button onClick={()=> onClose(id)} className={style.button}>X</button>}
         {
            isFav? <button onClick = {handleFavorite} >❤</button>
            : <button onClick = {handleFavorite} >🤍</button>
         }
         </div>
         <div className={style.imageContainer}>
            <h2>{id}</h2>
            <Link to={`/detail/${id}`}><h2 className={style.name}>{name}</h2></Link>
            <img src={image} alt={name} />
         </div>
         
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
}

function mapDispatchToProps(dispatch){
   return{
      addFav: function (character){
         dispatch(addFav(character))
      },
      removeFav: function(id){
         dispatch(removeFav(id))
      }
   }
}

function mapStateToProps(state){
   return{
      allCharacters: state.allCharacters,
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);