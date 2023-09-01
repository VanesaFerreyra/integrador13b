const express = require('express')
const router = require('./routes/index')
const morgan = require('morgan')
const cors = require('cors')

const server = express()
const PORT = 3001;

server.use(morgan('dev'))
server.use(cors())

server.use(express.json())

// request(req) --> pasa 1ro por morgan(req)--> luego pasa por las cors(req)--> despues pasa x express.json()--> luego pasa x las rutas(ej: '/rickandmorty')--> y luego llega el requerimiento al cliente

server.use('/rickandmorty', router)

server.listen(PORT, ()=>{
    console.log(`Server is listening on port: ${PORT}`);
})