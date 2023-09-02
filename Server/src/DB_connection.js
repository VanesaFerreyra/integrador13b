require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DDB } = process.env;
const userModel = require('./models/User')
const favoriteModel = require('./models/Favorite')

//EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexion.!Agrégala!
//Recuerda pasarle la informacion de tu archivo '.env'.

//URL ---> postgres://DB:USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
    //URL
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DDB}`,
    { logging: false, native:false }
);

//EJERCICIO 5
//Debajo de este comentario puedes ejecutar la función de los modelos.

//
userModel(sequelize)
favoriteModel(sequelize)
//

//EJERCICIO 06
//¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorite'})
Favorite.belongsToMany(User, {through: 'user_favorite'})

module.exports = {
    User,
    Favorite,
    //...sequelize.models,
    conn: sequelize,
}