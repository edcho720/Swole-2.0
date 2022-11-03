const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
{
        exercise0: String,
        muscleGroup0: String, 
        weight0: Number,
        sets0: Number,
        reps0: Number, 
        rest0: Number, 
        rir0: Number, 
        comments0: String,
        exercise1: String, 
        muscleGroup1: String, 
        weight1:  Number, 
        sets1: Number, 
        reps1:  Number, 
        rest1:  Number, 
        rir1: Number, 
        comments1: String, 
        exercise2: String, 
        muscleGroup2:  String, 
        weight2: Number, 
        sets2:  Number,
        reps2:  Number, 
        rest2: Number, 
        rir2: Number, 
        comments2:  String, 
        exercise3:  String, 
        muscleGroup3: String, 
        weight3: Number,
        sets3:  Number, 
        reps3:  Number, 
        rest3:  Number, 
        rir3:  Number, 
        comments3: String, 
        exercise4: String, 
        muscleGroup4: String, 
        weight4:  Number, 
        sets4:  Number, 
        reps4: Number, 
        rest4:  Number, 
        rir4: Number, 
        comments4:String, 
        startDate:  String, 
        startTime:  String, 
        endDay:  String, 
        endTime: String, 
        duration: Number
    }
);

module.exports = mongoose.model('Workout', workoutSchema);