
const express=require('express');
const app=express();
const port=3000;

app.get('/', (req, res) =>{
  res.send("<body style="background: #E8F9FD "><h1 style="color: #2155CD;" >😎👌 Hola mundo 😎👌</h1><h2 style="color: #0AA1DD">💻 Desde Node.js y Express 💻</h2><h3 style="color: #79DAE8">🧑🏽‍💻 Atte: Diego Israel Ramirez Martinez 🧑🏽‍💻</h3></body>");
})

app.get('/nueva-ruta', (req, res) =>{
  res.send("Hola, soy una nueva ruta");
})

app.listen(port, ()=>{
  console.log('Mi port' + port );
});
