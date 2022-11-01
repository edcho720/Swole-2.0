const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

const WorkoutController = require('../controllers/WorkoutController');


router.post('/', WorkoutController.createWorkout, (req, res) => {
    console.log("post req");
    res.status(200).json(res.locals.postedWorkout);
});

router.get('/:id', WorkoutController.getWorkout, (req, res) => {
    res.status(200).json(res.locals.workout);
});

router.get('/', WorkoutController.getAllWorkouts, (req, res) => {
    res.status(200).json(res.locals.allWorkouts);
});

router.patch('/:id', WorkoutController.updateWorkout, (req, res) => {
    res.status(200).json(res.locals.updatedWorkout);
});

router.delete('/:id', WorkoutController.deleteWorkout, (req, res) => {
    res.status(200).json(res.locals.deletedWorkout);
});

module.exports = router;