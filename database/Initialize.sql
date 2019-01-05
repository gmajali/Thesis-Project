CREATE TABLE IF NOT EXISTS usertype (
      id INTEGER NOT NULL AUTO_INCREMENT,
      user_type VARCHAR(25) NOT NULL,
      PRIMARY KEY (id)
    );

insert into usertype(user_type)
      values('admin'),
      ('general'),
      ('organization');

CREATE TABLE IF NOT EXISTS users (
        id INTEGER NOT NULL AUTO_INCREMENT,
        firstName VARCHAR(30) NOT NULL,
        lastName VARCHAR(30) NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(355) NOT NULL,
        telephone VARCHAR(50) NOT NULL,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        imgUrl VARCHAR(355) NOT NULL DEFAULT '',
        userTypeId integer,
        FOREIGN KEY (userTypeId) REFERENCES usertype(id), 
        PRIMARY KEY (id)
      );

CREATE TABLE IF NOT EXISTS charities  (
      id INTEGER NOT NULL AUTO_INCREMENT,
      name VARCHAR(30) NOT NULL,
      amount INTEGER(155) NOT NULL,
      -- amount_received INTEGER(155) NOT NULL,
      description MEDIUMTEXT NOT NULL,
      location VARCHAR(155) NOT NULL,
      owner_id integer,
      image VARCHAR(355) NOT NULL DEFAULT '',
      FOREIGN KEY (owner_id) REFERENCES users(id), 
      PRIMARY KEY (id)
    );


CREATE TABLE IF NOT EXISTS payments (
        id INTEGER NOT NULL AUTO_INCREMENT,
        user_id integer,
        FOREIGN KEY (user_id) REFERENCES users(id), 
        card_number INTEGER NOT NULL,
        expire_date VARCHAR(50) NOT NULL,
        owner VARCHAR(30) NOT NULL,
        cvc_code INTEGER(30) NOT NULL,
        amount INTEGER NOT NULL,
        PRIMARY KEY (id) 
      );

CREATE TABLE IF NOT EXISTS address (
      id INTEGER NOT NULL AUTO_INCREMENT,
      name VARCHAR(55) NOT NULL,
      street VARCHAR(55) NOT NULL,
      city VARCHAR(55) NOT NULL,
      state VARCHAR(55) NOT NULL,
      country VARCHAR(100) NOT NULL,
      user_id integer,
      FOREIGN KEY (user_id) REFERENCES users(id), 
      PRIMARY KEY (id)
    );

CREATE TABLE IF NOT EXISTS Donations (
      id INTEGER AUTO_INCREMENT NOT NULL,
      donation_to INTEGER(155) NOT NULL,
      donated_amount INTEGER(15) NOT NULL,
      user_id integer,
      payment_id integer,
      FOREIGN KEY (user_id) REFERENCES users(id), 
      FOREIGN KEY (payment_id) REFERENCES payments(id),
      PRIMARY KEY (id)
    );