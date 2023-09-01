import{ ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions/action_types";

const initialState ={
    myFavorites:[],
    allCharacters:[]
}
function reducer (state = initialState, action ){
    switch(action.type){
        case ADD_FAV:
            return{ 
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            };
        case FILTER:
            const filtered = state.allCharacters.filter(
                (char) => char.gender === action.payload
            );
            console.log(filtered);
            return{
                ...state,
                myFavorites: action.payload === "All" ? state.allCharacters : filtered,
            };
        case ORDER:
            const copy = [...state.allCharacters];
            return{
                ...state,
                myFavorites: copy.sort((a, b) =>{
                    return action.payload === "A" ? a.id - b.id : b.id - a.id
                })
            }
        //   const orderChar = state.allCharacters.sort((a,b) => {
        //    if(action.payload === "ascendente")return a.id - b.id
        //    return b.id - a.id
        //   });
        //   console.log(orderChar);
        //   return{
        //     ...state,
        //     myFavorites: [...orderChar],
        //   }

    default:
        return{...state};
    }
}

export default reducer;