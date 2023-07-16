const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const app = express();

//Роуты
const routerAdmin = require('./routers/admin');

const {PORT = 3000} = process.env;

// подключаем базу данных

mongoose.connect('mongodb://localhost:27017/MyTestBackend');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', routerAdmin);



app.listen(PORT,() =>{
    
    console.log(`Сервер запустился на ${PORT} порту`);
})