import React from "react";
//import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Detail(){
    const {id} = useParams()
    const [charDetail, setCharDetail] = useState({})

    useEffect(()=> {
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(response => response.json())
        .then((data) => {
      if (data.name) {
         setCharDetail(data);
      } else {
         alert(data.error);
      }
   });
   return setCharDetail({});
    },[id])
    
    return <div>
        <h2>{charDetail.id}</h2>
        <h2>{charDetail.name}</h2>
        <h4>{charDetail.status}</h4>
        <h4>{charDetail.species}</h4>
        <h4>{charDetail.gender}</h4>
        <h4>{charDetail.origin?.name}</h4>
        <img src= {charDetail.image} alt={charDetail.name} />
    </div>;
}

export default Detail;