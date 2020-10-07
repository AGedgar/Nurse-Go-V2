let mysql = require('mysql');

class DBConnection{
    constructor() {
        this.connection = mysql.createConnection({
            host     : 'localhost',
            user     : 'root',
            password : '',
            database : 'mydb'
        });
    }

    query(query, values){
        return new Promise((resolve, reject)=>{
            this.connection.query(query, values, (err, rows, fields)=>{
                resolve({err, rows, fields});
            });
        });
    }

    close(){
        return new Promise((resolve, reject)=>{
            this.connection.end(()=>{
                resolve();
            });
        });
    }
}

module.exports = DBConnection;