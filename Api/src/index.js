const http = require('http');
const PORT = 3001;
const characters = require('./utils/data.js')

http.createServer((req,res)=>{
  //res.setHeader('Access-Controll-Allow-Origin','*');
  let URL = req.url.split('/');
  let param1 = URL[1];
  let param2 = URL[2];
  let param3 = URL[3];
  if(param1 === 'rickandmorty' && param2 === 'characters'){
    res.writeHead(200,{'Content-type':'application/json'});
    res.end(JSON.stringify(characters));
    return;
  };
  if(param1 === 'rickandmorty' && param2 === 'character'){
    const character = characters.find(ch=>ch.id === parseInt(param3))
    res.writeHead(200,{'Content-type':'application/json'});
    res.end(JSON.stringify(character));
    return;
  };
  return res
    .writeHead(404,{'Content-type':'text/plain'})
    .end('404 NOt FOUND!');
}).listen(PORT,()=>console.log('in port http://localhost:3001'))