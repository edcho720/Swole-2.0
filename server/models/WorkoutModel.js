const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const workoutSchema = new Schema(
    // {
    //     exercise0: {
    //         type: String,
    //     },
    //     muscleGroup0: {
    //         type: String, 
    //     },
    //     weight0: {
    //         type: Number, 

    //     },
    //     sets0: {
    //         type: Number, 

    //     },
    //     reps0: {
    //         type: Number, 
  
    //     },
    //     rest0: {
    //         type: Number, 

    //     },
    //     rir0: {
    //         type: Number, 

    //     },
    //     comments0: {
    //         type: String, 

    //     },
    //     exercise1: {
    //         type: String, 

    //     },
    //     muscleGroup1: {
    //         type: String, 

    //     },
    //     weight1: {
    //         type: Number, 
  
    //     },
    //     sets1: {
    //         type: Number, 
 
    //     },
    //     reps1: {
    //         type: Number, 

    //     },
    //     rest1: {
    //         type: Number, 

    //     },
    //     rir1: {
    //         type: Number, 

    //     },
    //     comments1: {
    //         type: String, 

    //     },
    //     exercise2: {
    //         type: String, 

    //     },
    //     muscleGroup2: {
    //         type: String, 

    //     },
    //     weight2: {
    //         type: Number, 

    //     },
    //     sets2: {
    //         type: Number, 

    //     },
    //     reps2: {
    //         type: Number, 

    //     },
    //     rest2: {
    //         type: Number, 

    //     },
    //     rir2: {
    //         type: Number, 

    //     },
    //     comments2: {
    //         type: String, 

    //     },
    //     exercise3: {
    //         type: String, 

    //     },
    //     muscleGroup3: {
    //         type: String, 

    //     },
    //     weight3: {
    //         type: Number, 

    //     },
    //     sets3: {
    //         type: Number, 

    //     },
    //     reps3: {
    //         type: Number, 

    //     },
    //     rest3: {
    //         type: Number, 

    //     },
    //     rir3: {
    //         type: Number, 

    //     },
    //     comments3: {
    //         type: String, 

    //     },
    //     exercise4: {
    //         type: String, 
    //     },
    //     muscleGroup4: {
    //         type: String, 
    //     },
    //     weight4: {
    //         type: Number, 
    //     },
    //     sets4: {
    //         type: Number, 
    //     },
    //     reps4: {
    //         type: Number, 
    //     },
    //     rest4: {
    //         type: Number, 
    //     },
    //     rir4: {
    //         type: Number, 
    //     },
    //     comments4: {
    //         type: String, 
    //     },
    //     startDate: {
    //         type: String, 
    //     }, 
    //     startTime: {
    //         type: String, 
    //     }, 
    //     endDay: {
    //         type: String, 
    //     }, 
    //     endTime: {
    //         type: String, 
    //     },
    //     duration: {
    //         type: Number, 
    //     }
    // }
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