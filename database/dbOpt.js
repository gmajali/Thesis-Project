const express = require('express');
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
			knex.select('password').from('users').where('email', email)
			.then(function(result){
				if(result.length > 0){
					bcrypt.compare(req.body.password, result[0].password, function(err, isMatch){
						if (err){
							return res.send({
								success: false,
								message: 'Password is incorrect.'
							})
						}
						if (isMatch){
							return res.send({
								success: true,
								message: 'Password is correct.'
							})
						}
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