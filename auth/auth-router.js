
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../config/secrets');
const Users = require('./auth-model');

 
router.post('/register',  (req, res) => {
  let user = req.body;
  const errors = []
  
  if (user.zaddr && !zaddrRegex.test(user.zaddr)) {
    errors.push("your zaddr is invalid.")
  } if (user.password && user.password.length < 8) {
    errors.push("your password must be at least 8 characters long.")
  }
  
  if (errors.length) {
    res.status(500).json({errors})
  } else {
    user.password = bcrypt.hashSync(user.password,10);
    Users.add(user)
    .then(saved => {
      const id = saved[0]
      user.id = id
      delete user.password;
      const token = generateToken(user);
      res.status(201).json({user: newUser, token: token})
     
    })
    .catch(err => {
      res.status(500).json(err)
      console.log(err, 'err')
    })
  }
});

router.post('/login', (req, res) => {
  let {username, password} = req.body;

  Users.findBy({username})
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
       const token = generateToken(user) 
       delete user.password;
        res.status(200).json({
         token
        });
      } else {
        res.status(401).json({message: "Invalid Credentials"})
      }
    })

});


function generateToken(user) {
  const payload = {
    username: user.username,
    id: user.id,
    
  };
  const options = {
    expiresIn: "1d"
  };
  return jwt.sign(payload, secret.jwtSecret, options);
}

module.exports = router;
