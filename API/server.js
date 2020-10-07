const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

let UserController = require('./functions/UserController');
let LoginController = require('./functions/LoginController');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.options('*', cors());

//Login

app.post('/login', (req, res) =>{
    LoginController.login(req, res);
})

app.get('/login', (req, res) =>{
    LoginController.loginType(req, res);
})


// Users

app.post('/users', (req, res) =>{
    UserController.newUser(req, res);
})



app.listen(5000, () => console.log("App listening on 5000 " + 5000));