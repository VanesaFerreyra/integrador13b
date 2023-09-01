import {ADD_FAV,REMOVE_FAV } from "./action_types";
import axios from 'axios';


const URL = 'http://localhost:3001/rickandmorty/fav'

export const addFav = (character) =>{
    return async function(dispatch){
        try {
          const { data } = await axios.post(`${URL}`, character)
          return dispatch({
            type: ADD_FAV,
            payload: data
          })
        } catch (error) {
           console.log(error); 
        }
        
    }
}

export const removeFav = (id) => {
    return async(dispatch) =>{
       try {
        const{ data } = await axios.delete(`${URL}/${id}`)
        return dispatch({
            type: REMOVE_FAV,
            payload: data
        })
       } catch (error) {
           console.log(error);
       }
    }
}

export const filterCards = (gender) =>{
    return{
        type: "FILTER",
        payload: gender
    }
} 

export const orderCards = (orden) =>{
    return{
        type: "ORDER",
        payload: orden
    }
}