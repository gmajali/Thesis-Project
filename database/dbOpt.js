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
     getAllChar: function (callback) {
         knex.select().table('charities').then( (err, result) => {
           console.log('Initialized successfully');
           if (err) {
               // console.log('result',result)
               callback(err, null)
             } else {
                callback(null, result)
             }
         });
       },
       // knex('charities').where('id', 1)
       getUserChar: function (req, res) {
           knex('charities').select().where('owner_id', 1).then( (err, result) => {
             console.log('Initialized successfully');
             if (result) {
               // console.log('result',result)
               res.send(result)
             } else {
               res.send(err)
             }
           });
         },
       addCharity: function (req, res) {
           knex('books').insert(req).then( (err, done) => {
             console.log('Initialized successfully');
             if (result) {
               // console.log('result',result)
               res.send("update charities succ")
             } else {
               res.send(err)
             }
           });
         }
 }