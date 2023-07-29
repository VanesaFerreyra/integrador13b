import {ADD_FAV,REMOVE_FAV} from "./action_types";

export const addFav = (character) =>{
    return{
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id)=>({
    type: REMOVE_FAV,
    payload: id
})