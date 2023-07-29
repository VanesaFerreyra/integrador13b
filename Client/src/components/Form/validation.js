const regexEmail = /^w+ ([.-]?w+)*@w+ ([.-]?w+)* (.w {2,4})+$/;

const expresionRegular = /^(?=.{1,35}$).+/;

const regexPassword = /^(?=.*\d)[0-9a-zA-Z]{6,10}$/

export function validation(data){
    const errors = {}

    if(!regexEmail.test(data.email)) errors.email = "Debe ser un email";
    
    if(!expresionRegular.test(data.email))errors.email = "La longitud debe tener menos de 35 caracteres";

    if(!regexPassword.test(data.password))errors.password = "La contraseña debe tener al menos un número y entre 6 y 10 caracteres";

    return errors
}