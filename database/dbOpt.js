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
          knex('users').insert({name: `${req.body.firstName} ${req.body.lastName}`, 
          email: req.body.email, password: password, telephone: req.body.telephone}).then(result => {
              console.log(`successful insert ${result}`)
          }).catch(err => {
              console.log(`error => ${err}`);
          });
      },
      getAllChar: function (req, res) {
          knex.select().table('charities').then( (err, result) => {
            console.log('Initialized successfully');
            if (result) {
                res.send(result)
              } else {
                res.send(err)
              }
          });
        },
        getUserChar: function (req, res) {
            knex('charities').select().where('owner_id', 1).then( (err, result) => {
              console.log('Initialized successfully');
              if (result) {
                res.send(result)
              } else {
                res.send(err)
              }
            });
          },
        addCharity: function (req, res) {
          console.log(req.body, 'here add charities DB')
            knex('charities').insert({
              "name": req.body.name,
              "amount": req.body.amount,
              "description":req.body.description,
              "location": req.body.location,
              "image": req.body.location,
              "owner_id": 1
            }).then(result => {
              console.log(`successful insert ${result}`)
            }).catch(err => {
              console.log(`error => ${err}`)
            });
          },
        delChar: function(req, res) {
          knex('charities')
          .del()
            .where({'id': req.body.id}).then(result => {
              console.log(`successful delete ${result}`)
              res.send("delete suc.")
            }).catch(err => {
              console.log(`error => ${err}`)
              res.send(err)
            });
        },
      updateChar: function(req, res) {
        knex('charities')
          .where({'id': req.body.id})
          .update({
            "name": req.body.name,
              "amount": req.body.amount,
              "description":req.body.description,
              "location": req.body.location,
              "image": req.body.location,
              "owner_id": 1
          })
          .then(result => {
            console.log(`successful update ${result}`)
            res.send("update suc.")
          }).catch(err => {
            console.log(`error => ${err}`)
            res.send(err)
          });
      }
  }