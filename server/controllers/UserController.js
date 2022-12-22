const Users = require('../models/UserModel.js');
const mongoose = require('mongoose');

const bcrypt = require('bcrypt');
const { getListSubheaderUtilityClass } = require('@mui/material');
const saltRounds = 10;

const UserController = {};

// middleware for creating a user document in the DB
UserController.createUser = function(req, res, next) {

    const { email, password } = req.body;
    // takes the login password and salt round and returns hashed pw
    bcrypt.hash(password, saltRound, (err, hash) => {

        if(err) {

            res.send({
                success: false,
                statusCode: 500,
                message: 'Error salting the password:' + error
            })
        } else {
            // if there's no error, create the new user with the hashed password
            Users.create({email: email, password: hash })
                .then(newUser => {
                    res.locals.newUser = newUser;
                    return next();
                })
                .catch(err => {
                    return next({
                        log: `ERROR: ${err}`,
                        message: { err: 'An error ocurred in the CreateUser middleware'}
                    })
             
                })
        }
    
})},

// middleware for verifying user for login credentials
UserController.verifyUser = function(req, res, next) {
    // extract the needed values from the reuest body
    const { email, password } = req.body;
    // 
    Users.findOne( {email: email} )
        .then(existingUser => {

            res.locals.foundUser = existingUser;
            // extract the stored hashed pw from the DB
            const hash = res.locals.foundUser.password;
            // compare the attempted login pw with the hashed pw from DB
            // will return a boolean result 
            bcrypt.compare(password, hash, (err, result) => {
                // if true, approve login
                if(result) {
                    console.log('login success')
                    return next();
                } else return next('login unsuccesful')
            })
        })
        .catch(err => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in VerifyUser middleware' }
            })
        })
},


// Middleware for checking if the User already exists
UserController.checkForUser = function(req, res, next) {

    const { email, password } = req.body;

    Users.findOne({email: email})
        .then(existingUser => {
            if(!existingUser) { 
                return next();
            } else {
                return next('username already exists')
            }
        })
        .catch(err => {
            return next({
                log: `ERROR: ${err}`,
                message: { err: 'An error occurred in CheckForUser middleware' }
            })
        })

};
    
module.exports = UserController;