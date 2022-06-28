
const express=require('express');
const app=express();
const port=3000;

app.get('/', (req, res) =>{
  res.send("Hola mundo desde NodeJs y Express \n Atte_ \nDiego Israel Ramirez Martinez");
})

app.get('/nueva-ruta', (req, res) =>{
  res.send("Hola, soy una nueva ruta");
})

app.listen(port, ()=>{
  console.log('Mi port' + port );
});
