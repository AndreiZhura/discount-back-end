const express = require('express');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const cors = require('cors');
const path = require('path')
const app = express();

//Роуты
const routerAuth = require('./routers/auth');
const routeCategories = require('./routers/categories');
const routerPosition = require('./routers/positions');
const promocodeRouter = require('./routers/promocode');

const getAdmin = require('./routers/getAdmin');
const getRouterCategories = require('./routers/getCategories');
const getRouterPositions = require('./routers/getPositions');
const getPromocode = require('./routers/getPromocode');

const autch = require('./middlewares/auth')

const {PORT = 3001} = process.env;

// подключаем базу данных

mongoose.connect('mongodb://localhost:27017/MyTestBackend')
.then((res)=> console.log(`База данных подключекнна`))
.catch((err)=> console.log(err))


const options = {
    origin: [
      'https://localhost:10888',
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
app.use('/', routerAuth);
app.use('/', getRouterCategories);
app.use('/', getRouterPositions);
app.use('/', getPromocode);
app.use('/',autch);
app.use('/', getAdmin);
app.use('/', routeCategories);
app.use('/', routerPosition);
app.use('/', promocodeRouter)



app.listen(PORT,() =>{
    console.log(`Сервер запустился на ${PORT} порту`);
})