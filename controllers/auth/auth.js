const bcrypt = require('bcryptjs');
const Admin = require('../../models/admin');
const jwt = require('jsonwebtoken');

module.exports.createAdmin = (req, res) => {

  const { email, password, name } = req.body;
  bcrypt.hash(password, 10)
    .then((hash) => {
      Admin.create({ email, password: hash, name })
        .then((admin) => {
          res.status(200)
            .send({ data: admin })
        })
    })

    .catch((err) => {
      res.status(400)
        .send({ message: err.message });
    })

};

module.exports.login = (req, res) => {
  const { email, password } = req.body;

  return Admin.findUserByCredentials(email, password)
    .then((admin) => {
      // создадим токен
      const token = jwt.sign({ _id: admin._id }, 'some-secret-key');

      // вернём токен
      res.send({ token });
    })
    .catch((err) => {
      res
        .status(401)
        .send({ message: err.message });
    });
}; 