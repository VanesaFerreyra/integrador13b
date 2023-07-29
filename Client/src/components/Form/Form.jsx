import { useState } from "react";
import { validation } from "./validation";

function Form({login}){
    
    const [userData, setUserData] = useState({
        email:'',
        password:''
    })
    
    //console.log(userData)

    const [errors, setErrors] = useState({})

    const handleChange = function(evento){
        const nameProperty = evento.target.name
        const value = evento.target.value
       
        setErrors(validation({...userData, [nameProperty]:value}))
        setUserData({...userData,[nameProperty]:value})
    }

    function handleSubmit(evento){
        evento.preventDefault()
        login(userData);
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor= "">email:
            <input 
               type= "text" 
               value={userData.email} 
               name = "email" 
               onChange={handleChange}/>
            </label>
            <br />
            <span style={{color:"blue"}} >{errors.email}</span>
            <br />
            <label htmlFor= "">password:</label>
            <input 
               type= "password" 
               value={userData.password} 
               name = "password"
               onChange={handleChange} />
               <br />
               <span style={{color: "blue"}}>{errors.password} </span>
               <br/>
            <button> Submit</button>
        </form>
    </div>
}
export default Form;