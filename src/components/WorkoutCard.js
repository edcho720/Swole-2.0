import React, { useEffect } from 'react'

function WorkoutCard(props) {

const {
    exercise0,
    muscleGroup0,
    weight0,
    sets0,
    reps0,
    rest0,
    rir0,
    comments0,
    exercise1,
    muscleGroup1,
    weight1,
    sets1,
    reps1,
    rest1,
    rir1,
    comments1,
    exercise2,
    muscleGroup2,
    weight2,
    sets2,
    reps2,
    rest2,
    rir2,
    comments2,
    exercise3,
    muscleGroup3,
    weight3,
    sets3,
    reps3,
    rest3,
    rir3,
    comments3,
    exercise4,
    muscleGroup4,
    weight4,
    sets4,
    reps4,
    rest4,
    rir4,
    comments4,
    startDate, 
    startTime, 
    endDay, 
    endTime,
    duration 
} = workoutData.props

useEffect(() => {console.log('workoutcard data', workoutData.props)}, [])

const set1 = Number(sets0)
const set2 = Number(sets1)
const set3 = Number(sets2)
const set4 = Number(sets3)
const set5 = Number(sets4)

const sum = [set1, set2, set3, set4, set5]
const sumSets = sum.reduce((a, b) => a + b)

// const totalReps = reps0 + reps1 + reps2 + reps3 + reps4; 
const woDuration = duration;

function removeWorkout() {
    console.log('delete');
}

function editWorkout() {
    console.log('edit');
}


  return (
    <div className="history-card">

        <div id="historyCard-header"><b>Date of Workout: </b>{startDate}</div>
        <div><b>Workout Duration: </b>{woDuration && `${woDuration.toFixed(0)} minutes`}</div><br></br>
        <div><b>Sets: </b>{`${sets0 && sets0 + ' +'} ${sets1 && sets1 + ' +'} ${sets2 && sets2 + ' +'} ${sets3 && sets3 + ' +'} ${sets4 && sets4}`}</div>
        <div><b>Reps: </b>{`${reps0 && reps0 + ' +'} ${reps1 && reps1 + ' +'} ${reps2 && reps2 + ' +'} ${reps3 && reps3 + ' +'} ${reps4 && reps4}`}</div>
        <div><b>Total Volume: </b>{sumSets} sets</div><br></br>
        <div><b>1st Exercise: </b>{muscleGroup0} | {exercise0} | {weight0}lbs. | {sets0} sets | {reps0} reps | {rest0} sec | {rir0} RIR</div>
        <div><b>Comments: </b>{comments0}</div><br></br>
        <div><b>2nd Exercise: </b>{muscleGroup1} | {exercise1} | {weight1}lbs. | {sets1} sets | {reps1} reps | {rest1} sec | {rir1} RIR</div>
        <div><b>Comments: </b>{comments1}</div><br></br>
        <div><b>3rd Exercise: </b>{muscleGroup2} | {exercise2} | {weight2}lbs. | {sets2} sets | {reps2} reps | {rest2} sec | {rir2} RIR</div>
        <div><b>Comments: </b>{comments2}</div><br></br>
        <div><b>4th Exercise: </b>{muscleGroup3} | {exercise3} | {weight3}ibs. | {sets3} sets | {reps3} reps | {rest3} sec | {rir3} RIR</div>
        <div><b>Comments: </b>{comments3}</div><br></br>
        <div><b>5th Exercise: </b>{muscleGroup4} | {exercise4} | {weight4}lbs. | {sets4} sets | {reps4} reps | {rest4} sec | {rir4} RIR</div>
        <div><b>Comments: </b>{comments4}</div><br></br>

        <button className="button-style" onClick={removeWorkout}>Remove</button>
        <button className="button-style" onClick={editWorkout}>Edit</button>
    </div>
  )
}

export default WorkoutCard