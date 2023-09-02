
const { conn } = require('./DB_connection')
const server = require('./app')
require('dotenv').config()

const {PORT} = process.env;

server.listen(PORT, async ()=>{
    await conn.sync({force: true})
    console.log(`Server is listening on port: ${PORT}`);
})