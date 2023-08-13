const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const AuthorizationRequired = require('../errors/AuthorizationRequired');
const { WRONG_EMAIL_OR_PASSWORD } = require('../constants/constants');


const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: (v) => isEmail(v),
          message: 'Неправильный формат почты',
        },
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    name: {
        type: String,
        require: true,
        minlenght: 2,
        maxlenght: 50,
        required: true,
    },
    role: {
        type: String,
        default: 'admin'
    },
})

adminSchema.statics.findUserByCredentials = function Login(email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new AuthorizationRequired(WRONG_EMAIL_OR_PASSWORD));
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new AuthorizationRequired(WRONG_EMAIL_OR_PASSWORD));
          }

          return user; // теперь user доступен
        });
    });
};

module.exports = mongoose.model('admins', adminSchema);