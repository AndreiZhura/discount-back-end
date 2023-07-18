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