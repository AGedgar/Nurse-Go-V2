const DBConnection = require('../DBConnection');

class UserController{
    static newUser(req, res){
        let body = req.body;
        let DB = new DBConnection();

        DB.query(`SELECT correo FROM Usuario WHERE correo = ?`,[body.correo]).then((queryRes) =>{
            if(queryRes.rows.length > 0){
                res.status(400).send();
                DB.close();
            }else{
                // const crypto = require('crypto');
                // const hash = crypto.createHmac('sha256',body.password)
                //                 .update('test')
                //                 .digest('hex');
                //                 console.log(hash)
                DB.query(`INSERT INTO Usuario (nombre, correo, estado, ciudad, telefono, password, tipoUsuario) 
                            VALUES (?,?,?,?,?,?,?)`,[body.nombre, body.correo, body.estado, body.ciudad, body.telefono, body.password, body.tipoUsuario]).then((queryRes) =>{
                                res.status(201).send({createdId: queryRes.rows.insertId})
                                DB.close();
                            })
            }
        })
        }

        static getUser(req, res){
            let body = req.body;
            let DB = new DBConnection();

            DB.query(`SELECT nombre, correo, estado, ciudad, telefono, tipoUsuario FROM Usuario`).then((queryRes)=>{
                if(queryRes.rows > 0){
                    res.status(200).send({user: queryRes.rows[0]});
                    DB.close();
                }else{
                    res.status(404).send();
                    DB.close();
                }
            })
        }
}


module.exports = UserController;