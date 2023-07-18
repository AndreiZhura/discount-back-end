const bcrypt = require('bcryptjs');
const Admin = require('../models/admin');

module.exports.createAdmin = (req, res) => {

    const { email, password, name } = req.body;
    bcrypt.hash(password, 10)
        .then((hash) => {
            Admin.create({ email, password:hash, name })
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

module.exports.login = (req,res) =>{
    const {email, password} = req.body;
    Admin.findOne({email})
    .then((admin)=>{
        if(!admin){
          res.status(500).send("неправильно введены почта или пароль");
        }
        console.log(admin.password)
        return bcrypt.compare(password, admin.password)
    })
    .then((matched) => {
        if (!matched) {
          // хеши не совпали — отклоняем промис
          return Promise.reject(new Error('Неправильные почта или пароль'));
        }
  
        // аутентификация успешна
        res.send({ message: 'Всё верно!' });
      })
      .catch((err) => {
        res.status(401).send({ message: err.message });
      });
}