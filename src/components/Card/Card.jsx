import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   const {id,name,status,species,gender,origin,image,onClose}= props;
   return (
      <div className= {style.container}>
         <button onClick={()=> onClose(id)}>X</button>
         <h2>{id}</h2>
         <Link to={`/detail/${id}`}><h2>{name}</h2></Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='character' />
      </div>
   );
}
