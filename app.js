const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();
const router = require('./routers/index')



const {PORT = 3000} = process.env;

// подключаем базу данных

mongoose.connect('mongodb://localhost:27017/MyTestBackend')
.then((res)=> console.log(`База данных подключекнна`))
.catch((err)=> console.log(err))

const options = {
  origin: [
    'https://api.andreizhura.nomoredomains.club',
    'http://api.andreizhura.nomoredomains.club',
    'https://andreizhura.nomoredomains.club',
    'http://andreizhura.nomoredomains.club',
    'https://10.200.61.46:10888',
    'https://localhost:10888',
    'http://localhost:3000/',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'origin', 'Authorization'],
  credentials: true,
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads/',express.static(path.join(__dirname, './uploads/')));


app.use(bodyParser.json());
app.use(cors(options));
app.use('/',router)




app.listen(PORT,() =>{
    console.log(`Сервер запустился на ${PORT} порту`);
})