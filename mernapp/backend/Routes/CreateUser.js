const express = require('express');
const router = express.Router()
const User = require('../model/user');
const { body, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = "Efbgrvbgnhgfafhhgszxfhbhhnrdghh@$#"

router.post('/creatuser', [
  body('email').isEmail(),
  body('name').isLength({min: 6}),
  //password must be at least 5 char long
  body('password').isLength({min: 6})
],
async(req, res) => {
  
  const  errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors : errors.array()});
  }
  const salt = await bcrypt.genSalt(12);
  let secPassword = await bcrypt.hash(req.body.password,salt)

  try {
    await User.create({
      name: req.body.name,
      password: secPassword,
      email: req.body.email,
      location: req.body.location 
    });
  res.json({success: true});
  } catch (error) {
    console.log(error);
    res.json({success: false});
  }
});
// login user to check


router.post('/loginuser', [
  body('email').isEmail(),
  //password must be at least 5 char long
  body('password').isLength({min: 6})
],
async(req, res) => {
  
  const  errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors : errors.array()});
  }
  let email = req.body.email;

  try {
    let userData = await User.findOne({email});
    if(!userData){
      return res.status(400).json({errors : "Try with login with Correct data"});

    }
    const pwdCompare = bcrypt.compare(req.body.password,userData.password)
    if(!pwdCompare){
      return res.status(400).json({errors : "Try with login with Correct data"});


    }
    const data  = {
      user: {
        id: userData.id


      }
    }
    
    const authToken = jwt.sign(data,jwtSecret)

    res.json({success: true, authToken: authToken});

  
  } catch (error) {
    console.log(error);
    res.json({success: false});
  }
});
module.exports = router;
