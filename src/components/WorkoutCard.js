import React, { useState } from 'react'
import { useRouteLoaderData } from 'react-router-dom';

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
  duration,
  _id, 
  } = props.workoutData

const [ editInfo, setEditInfo ] = useState({comments4: comments4});
const [ editOn, setEditOn ] = useState(false);

function handleChange(e) {
  const {name, value, type, checked} = e.target;
  setEditInfo(oldData => {
      return (
          {
          ...oldData,
          [name]: type === "checkbox" ? checked : value
          }
      )
  })
};



console.log('editInfo:', editInfo.comments4)
console.log('workoutcard id', _id)

const set1 = Number(sets0)
const set2 = Number(sets1)
const set3 = Number(sets2)
const set4 = Number(sets3)
const set5 = Number(sets4)

const sum = [set1, set2, set3, set4, set5]
const sumSets = sum.reduce((a, b) => a + b)
const woDuration = duration;

const { darkModeOn, removeWorkout } = props;

// if(!props.workoutData) {
//   return  <p>No workouts yet</p>
// }
function handleEdit(id) {
  console.log('edit fired!')
  setEditOn(true);
}


function handleUpdate(id) {
  console.log('PATCH FIRED!');
  console.log('editInfo:', editInfo.comments4);

  fetch(`/api/workouts/${id}`, { 
    method: 'PATCH',
    body: JSON.stringify({
      comments4: editInfo.comments4,
    }),
    headers: {
      'Content-Type': 'application/json',
    }, 
  })
  .then(res => res.json())
  .then((data) => {

    console.log('Update successful:', data.comments4);

  })
  .catch(err => console.log('Error:', err))

  setEditInfo({comments4: ""})
  setEditOn(false);
  location.reload();
}


  return (


    <div className={darkModeOn ? 'body2' : 'body'}>
        <div className={darkModeOn ? "history-card2" : "history-card"}>

            <div id="historyCard-header"><b></b><h2>{startDate}</h2></div>
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

            <button className="button-style" id="end-button" onClick={() => removeWorkout(_id)}>Remove</button>

            {!editOn && <button className="button-style" onClick={() => handleEdit(_id)}>Edit</button>}
            {editOn && <button className="button-style3" onClick={() => handleUpdate(_id)}>Update</button>}

            {editOn && <textarea
            value={editInfo.comments4}
            placeholder="Edit comments..."
            onChange={handleChange}
            name="comments4"
            />}

        </div>
    </div>
  )
}

export default WorkoutCard