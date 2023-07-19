const http = require('http');
const data = require("./utils/data");

http
.createServer((req, res)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    const { url } = req;
    //console.log(url);

    if(url.includes("/rickandmorty/character")){
        //console.log('estoy aquí');
        const id= url.split("/").at(-1);
        const character = data.find((char) => char.ir === parseInt(id));

        //console.log(character);
        if(character){
            res.writeHead(200, {"Content-Type": "application/json"});
            res.end("json not found");
        }
    }
    
}).listen(3001, 'localhost');