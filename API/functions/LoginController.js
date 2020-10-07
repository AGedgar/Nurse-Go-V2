const DBConnection = require('../DBConnection');
const jwt = require('jsonwebtoken');

class LoginController{
    static login(req, res){
        let body = req.body;
        let DB = new DBConnection();

        if(body.correo != undefined && body.password != undefined){
            DB.query(`SELECT nombre, tipoUsuario  FROM Usuario WHERE correo = ? and password = ?`,[body.correo, body.password]).then((queryRes) =>{
                if(queryRes.rows.length > 0){
                    res.status(200).send();
                    DB.close();
                }else{
                    res.status(404).send();
                    DB.close();
                }
            })
        }else{
            res.status(400).send();
        }
        }

        static loginType(req, res){
            let query = req.query;
            let DB = new DBConnection();

            DB.query(`SELECT id, nombre, tipoUsuario FROM Usuario WHERE correo = ?`,[query.correo]).then((queryRes)=>{
                if(queryRes.rows.length > 0){
                    let data = queryRes.rows[0];
                    jwt.sign({ id: data.id, tipoUsuario: data.tipoUsuario, nombre: data.nombre }, "SecretKey2020", { algorithm: 'HS256' }, function(err, token) {
                        res.status(200).send({id: data.id , token, nombre: `${data.nombre}`, tipoUsuario: data.tipoUsuario })
                    });
                    DB.close();
                }else{
                    res.status(404).send();
                    DB.close();
                }
            })
        }
}


module.exports = LoginController;