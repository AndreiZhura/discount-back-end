const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const cors = require("cors");
const app = express();

//Роуты
const routerAdmin = require('./routers/admin');
const routeCategories = require('./routers/categories');
const routerPosition = require('./routers/positions');
const autch = require('./middlewares/autch')

const {PORT = 3001} = process.env;

// подключаем базу данных

mongoose.connect('mongodb://localhost:27017/MyTestBackend');
const options = {
    origin: [
      'https://api.andreizhura-diplom.nomoredomains.club',
      'http://api.andreizhura-diplom.nomoredomains.club',
      'https://andreizhura-diplom.no.nomoredomains.work',
      'http://andreizhura-diplom.no.nomoredomains.work',
      'https://localhost:3000',
      'http://localhost:3000',
      'https://localhost:3001',
      'https://localhost:10888',
    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
    credentials: true,
  };

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors(options));
app.use('/', routerAdmin);
//app.use('/',autch);
app.use('/', routeCategories);
app.use('/', routerPosition);



app.listen(PORT,() =>{
    
    console.log(`Сервер запустился на ${PORT} порту`);
})