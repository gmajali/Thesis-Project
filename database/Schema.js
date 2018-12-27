var mysql = require('mysql');
//install my sql

//Note: to insert the database credential
var dbConnection = mysql.createConnection({
    host: "db4free.net",
    user: "corei4",
    password: 'corei4corei4',
    insecureAuth: true,
    database: 'charity_rbk'
  });

//Note:create the connection
dbConnection.connect(function(err) {
    if (err) {
      console.log('access denied to the database', err)
    } else {
      console.log('database has been connected')
    }
  });


// Create user table
var users = `
CREATE TABLE IF NOT EXISTS users (
    id INTEGER NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id) 
  );
`

// Create campaign table
var charities = `
CREATE TABLE charities  (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  amount INTEGER(155) NOT NULL,
  description MEDIUMTEXT NOT NULL,
  location VARCHAR(155) NOT NULL,
  PRIMARY KEY (id)
);
  `

  // owner_id INTEGER NOT NULL,

// Create payments table
var payments = `
CREATE TABLE IF NOT EXISTS payments (
    id INTEGER NOT NULL AUTO_INCREMENT,
    user_id INTEGER NOT NULL,
    card_number INTEGER NOT NULL,
    expire_date VARCHAR(50) NOT NULL,
    owner VARCHAR(30) NOT NULL,
    cvc_code INTEGER(30) NOT NULL,
    amount INTEGER NOT NULL,
    PRIMARY KEY (id) 
  );
  `

// Create address table

var address = `
CREATE TABLE IF NOT EXISTS address (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(55) NOT NULL,
  street VARCHAR(55) NOT NULL,
  city VARCHAR(55) NOT NULL,
  state VARCHAR(55) NOT NULL,
  country VARCHAR(100) NOT NULL,
  user_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);
`

// Create donations table
var donations = `
CREATE TABLE Donations (
  id INTEGER AUTO_INCREMENT NOT NULL,
  donation_to INTEGER(155) NOT NULL,
  donated_amount INTEGER(15) NOT NULL,
  user_id INTEGER NOT NULL,
  payment_id INTEGER NOT NULL,
  PRIMARY KEY (id)
);
`

// Create usertypes list
var usertype = `		
CREATE TABLE usertype (
  id INTEGER DEFAULT 0,
  user_type VARCHAR(25) NOT NULL,
  PRIMARY KEY (id)
);
`

// Note:create the table
dbConnection.query(users, function(err, result) {
    if (result) {
      console.log('users table has been created');
    } else {
      console.log('users table return an ERROR', err);
    }
  })

// Note:create the table
dbConnection.query(charities, function(err, result) {
    if (result) {
      console.log('charities table has been created');
    } else {
      console.log('charities table return an ERROR');
    }
  })

  // Note:create the payments
dbConnection.query(payments, function(err, result) {
    if (result) {
      console.log('payments table has been created');
    } else {
      console.log('payments table return an ERROR');
    }
  })

  //Note: create the address table
  dbConnection.query(address, function(err, result) {
    if (result) {
      console.log('address table has been created');
    } else {
      console.log('address table return an ERROR');
    }
  })

  // Note:create the donations table
dbConnection.query(donations, function(err, result) {
  if (result) {
    console.log('donations table has been created');
  } else {
    console.log('donations table return an ERROR', err);
  }
})

// Note:create the usertype table
dbConnection.query(usertype, function(err, result) {
  if (result) {
    console.log('usertype table has been created');
  } else {
    console.log('usertype table return an ERROR', err);
  }
})

var test = `insert into users (name, email, password)
  VALUES ("ghazi", "ghazi@outlook.com", "1234")`

  dbConnection.query(test, function(err,result){
      if (result) {
          console.log('user has been saved');
        } else {
          console.log('user has NOT BEEN SAVED', err);
        }
    })

  //INSERT INTO table_name (column1, column2, column3,...)
//VALUES (value1, value2, value3,...)
// var qq = `insert into campaign (images, id_users)
// VALUES ("value1",1)`
  // dbConnection.query(qq,function(err,result){
  //   if (result) {
  //       console.log('users table has been created');
  //     } else {
  //       console.log('users table return an ERROR', err);
  //     }
  // })

  module.exports.Schema = dbConnection