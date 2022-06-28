
const express=require('express');
const app=express();
const port=3000;

app.get('/', (req, res) =>{
  res.send("<h1>Hola mundo</h1></br> <h2>desde Node.js y Express</h2></br> <h3>Atte: Diego Israel Ramirez Martinez</h3>");
})

app.get('/nueva-ruta', (req, res) =>{
  res.send("Hola, soy una nueva ruta");
})

app.listen(port, ()=>{
  console.log('Mi port' + port );
});
