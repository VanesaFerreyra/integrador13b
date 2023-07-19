import React from "react";

function Form(){
    return <div>
        <form>
            <label htmlFor= "">email:</label>
            <input type= "text" />
            <label htmlFor= "">password:</label>
            <input type= "text" />
            <button> Submit</button>
        </form>
    </div>
}
export default Form;