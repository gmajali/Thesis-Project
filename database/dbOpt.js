const bcrypt = require('bcrypt-nodejs');
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

  module.exports = {
      signUp: function(req, res){
          var password = generateHashPassword(req.body.password);
          knex('users').insert(
            knex
              .select(req.body.email, req.body.name)
              .whereNotExists(knex('users').where('email', req.body.email))
          )
          knex('users').insert({name: `${req.body.firstName} ${req.body.lastName}`, 
          email: req.body.email, password: password, telephone: req.body.telephone}).then(result => {
              console.log(`successful insert ${result}`)
          }).catch(err => {
              console.log(`error => ${err}`);
          });
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