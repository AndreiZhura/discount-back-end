const Admin = require('../../models/admin');


module.exports.getAdminMe = (req,res) =>{
     Admin.findById(req.admin)
     .then((admin)=>{
        return res.send({ data: admin });
     })
     .catch((err)=>{
        console.log(err);
     })
}