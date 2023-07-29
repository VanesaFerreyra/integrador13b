import {ADD_FAV,REMOVE_FAV} from "./action_types";

const initialState ={}
function reducer (state = initialState, action){
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payLoad]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: state.myFavorites.filter(char => char.id !== action.payLoad)
            }
        default:
            return{...state}
    }
}

export default reducer;