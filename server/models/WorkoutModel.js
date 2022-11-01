const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    {
        exercise0: {
            type: String, 
            // required: [true, 'Please add your exercise of choice']
        },
        muscleGroup0: {
            type: String, 
            // required: [true, 'Please add your muscle group of choice']
        },
        weight0: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        sets0: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        reps0: {
            type: Number, 
            // required: [true, 'Please add your total reps']
        },
        rest0: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        rir0: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        comments0: {
            type: String, 
            /* required: [true, 'Please add your'] */
        },
        exercise1: {
            type: String, 
            // required: [true, 'Please add your exercise of choice']
        },
        muscleGroup1: {
            type: String, 
            // required: [true, 'Please add your muscle group of choice']
        },
        weight1: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        sets1: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        reps1: {
            type: Number, 
            // required: [true, 'Please add your total reps']
        },
        rest1: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        rir1: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        comments1: {
            type: String, 
            /* required: [true, 'Please add your'] */
        },
        exercise2: {
            type: String, 
            // required: [true, 'Please add your exercise of choice']
        },
        muscleGroup2: {
            type: String, 
            // required: [true, 'Please add your muscle group of choice']
        },
        weight2: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        sets2: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        reps2: {
            type: Number, 
            // required: [true, 'Please add your total reps']
        },
        rest2: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        rir2: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        comments2: {
            type: String, 
            /* required: [true, 'Please add your'] */
        },
        exercise3: {
            type: String, 
            // required: [true, 'Please add your exercise of choice']
        },
        muscleGroup3: {
            type: String, 
            // required: [true, 'Please add your muscle group of choice']
        },
        weight3: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        sets3: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        reps3: {
            type: Number, 
            // required: [true, 'Please add your total reps']
        },
        rest3: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        rir3: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        comments3: {
            type: String, 
            /* required: [true, 'Please add your'] */
        },
        exercise4: {
            type: String, 
            // required: [true, 'Please add your exercise of choice']
        },
        muscleGroup4: {
            type: String, 
            // required: [true, 'Please add your muscle group of choice']
        },
        weight4: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        sets4: {
            type: Number, 
            // required: [true, 'Please add your total sets']
        },
        reps4: {
            type: Number, 
            // required: [true, 'Please add your total reps']
        },
        rest4: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        rir4: {
            type: Number, 
            /* required: [true, 'Please add your'] */
        },
        comments4: {
            type: String, 
            /* required: [true, 'Please add your'] */
        },
        startDate: {
            type: String, 
            // required: [true, 'Please add your startDate']
        }, 
        startTime: {
            type: String, 
            // required: [true, 'Please add your startTime']
        }, 
        endDay: {
            type: String, 
            // required: [true, 'Please add your endDay']
        }, 
        endTime: {
            type: String, 
            // required: [true, 'Please add your endTime']
        },
        duration: {
            type: Number, 
            // required: [true, 'Please add your duration']
        }
    }
);

module.exports = mongoose.model('Workout', workoutSchema);