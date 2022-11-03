const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Authorization...
const AuthController = require('../controllers/AuthController');
const WorkoutController = require('../controllers/WorkoutController');

router.get('/', WorkoutController.getAllWorkouts, (req, res) => {
    return res.status(200).json(res.locals.workouts);
});

// router.get('/:id', WorkoutController.getWorkout, (req, res) => {
//     return res.status(200).json(res.locals.workout);
// });

router.post('/', WorkoutController.createWorkout, (req, res) => {
    return res.status(200).json(res.locals.postedWorkout);
});

router.patch('/:id', WorkoutController.updateWorkout, (req, res) => {
    return res.status(200).json(res.locals.updatedWorkout);
});

router.delete('/:id', WorkoutController.deleteWorkout, (req, res) => {
    return res.status(200).json(res.locals.deletedWorkout);
});

module.exports = router;