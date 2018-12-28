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
          knex('users', {name: `${req.body.firstName} ${req.body.lastName}`, 
          email: req.body.email}).then(result => {
              console.log(`successful insert ${result}`)
          }).catch(err => {
              console.log(`error => ${err}`);
          });
      }
  }