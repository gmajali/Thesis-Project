const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: "db4free.net",
        user: "corei4",
        password: 'corei4corei4',
        insecureAuth: true,
        database: 'charity_rbk'
    }
  });

  function generateHashPassword(password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }

  function validPassword(password, dbPassword) {
    return bcrypt.compareSync(password, dbPassword);
  };

  module.exports = {
      signUp: function(req, res){
          var password = generateHashPassword(req.body.password);
          var email = req.body.email;
          var telephone = req.body.telephone;
          var name = req.body.name;
          knex('users').select().where('email', email).then(function(rows){
              if (rows.length === 0){
                knex('users').insert({name: name, email: email, password: password, telephone: telephone}).then(result => {
                    console.log(`successful insert ${result}`)
                })
              } else {
                  throw "User already exists!";
              }           
          }).catch(err => {
            console.log(`error => ${err}`);
        });
      },
      signIn: function(req, res){
          var email = req.body.email
          knex.select('email', 'password').from('users').where('email', email)
          .then(function(result){
              if(result.length > 0){
                  validPassword(result[0].password){
                      
                  }
              }
                if(validPassword(password)){
                    return res.send({
                        success: true,
                        message: 'Signed in successfully'
                    })
                } else {
                    return res.send({
                        success: false,
                        message: 'Invalid sign in'
                    })
                }
        })
      },
      getUserChar: function (req, res) {
          knex.select().table('charities').then( (err, result) => {
            console.log('Initialized successfully');
            if (result) {
                // console.log('result',result)
                res.send(result)
              } else {
                res.send(err)
              }
          });
        }
  }