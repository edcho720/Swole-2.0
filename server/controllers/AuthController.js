const Workout = require('../models/WorkoutModel.js');

const AuthController = {};

// set a cookie on the client 
AuthController.setCookie = (req, res, next) => {
    res.coookie('pass', req.body.password, {
        httpOnly: true,
    });
    return next();
};

AuthController.verifyCookie = (req, res, next) => {
    // grab the pass value from req.cookie
    const { pass } = req.cookies;
    Workout.find({ _id:req.params.id })
        .then(result => {
            // console.log('result from authController,' result)
            if(pass === result[0].password) {
                return next();
            } else return next({ message: 'Error! unsuccessful validation'});
        }). catch(err => next(err));
};

module.exports = AuthController;