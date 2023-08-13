require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path')
const { errors } = require('celebrate');
const routes = require('./routers/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const helmet = require('helmet');
const { apiRequestLimiter } = require('./riteLimited/riteLimited');
// подключаем базу данных

//  api.andreizhura-diplom.nomoredomains.club
const {
  SERVER_ERROR,
  NOT_FOUND_ERROR,
} = require('./middlewares/errors');

const { PORT, DATABASE_ADRESS } = require('./constants/constants');

const app = express();

mongoose.set('strictQuery', true);
mongoose.connect(DATABASE_ADRESS);

app.use(helmet());
app.disable('x-powered-by');

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса
/* Аргументом методу bodyParser.urlencoded мы передаём объект опций.
 "extended: true" означает, что данные в полученном объекте body могут быть любых типов. */
app.use(apiRequestLimiter);
app.use(requestLogger);



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
app.use('/uploads/', express.static(path.join(__dirname, './uploads/')));

app.use(bodyParser.json());
app.use(cors(options));
app.use('/', routes);
app.use(errorLogger); // подключаем логгер ошибок
app.use(errors()); // обработчик ошибок celebrate
app.use('*', NOT_FOUND_ERROR);
app.use(SERVER_ERROR);




app.listen(PORT, () => {
  console.log(`Сервер запустился на ${PORT} порту`);
})