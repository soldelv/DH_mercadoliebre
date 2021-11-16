const express = require('express');
const app = express();
app.use(express.static('public'));


app.get('/home', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.listen( process.env.PORT || 3000, function(){
    console.log('Servidor funcionando en el puerto 300');
});
