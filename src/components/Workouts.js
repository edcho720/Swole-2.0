import React, { useState, useEffect } from 'react'
import WorkoutCard from './WorkoutCard'

function Workouts(props) {
  const { darkModeOn } = props;

  const [fetchedWos, setFetchedWos] = useState([])
  const [ isFetching , setIsFetching ] = useState(true);

  let allWorkouts;

  useEffect(() => {
      fetch('/api/workouts')
        .then(res => {
          return (
            res.json()// expecting an array of objects
          )
        })
        .then(data => {
          setFetchedWos(old => [...data] )
            setIsFetching(false);
            allWorkouts = fetchedWos.map( wo => {
              return (
                <WorkoutCard 
                  darkModeOn={darkModeOn}
                  workoutData={wo}
                  removeWorkout={removeWorkout}
                  editWorkout={editWorkout}
                />
            )
            });
        })// data is supposed to be an array, but ret undefined
        .catch(err => {
          console.log('GET req error on LOAD Error:', err)
        })
    }, []); // runs only on first render, don't include it and it will run on every render

    const fetchedData = fetchedWos;
    const dataWo = fetchedData.map( (wo, i) => {
      return (
        <WorkoutCard 
          key={wo._id}
          id={wo._id}
          darkModeOn={darkModeOn}
          removeWorkout={removeWorkout}
          // editWorkout={editWorkout}
          workoutData={wo}
        />
      )
    });


  function removeWorkout(id) {
      console.log('delete fired');

      fetch(`/api/workouts/${id}`, { method: 'DELETE' })
      .then(res => res.json())
      .then((data) => {console.log('delete successful:', data)})
      .catch(err => console.log('Error:', err))

      setFetchedWos(old => {
      return (
        old.filter( old => old._id !== id )
      )
      });
  };
  
  // function editWorkout(id) {
  //     console.log('PATCH FIRED!');

  //     fetch(`/api/workouts/${id}`, { 
  //       method: 'PATCH',
  //       body: JSON.stringify({
  //         comments0: 
  //       }),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }, 
  //     })
  //     .then(res => res.json())
  //     .then((data) => {console.log('Update successful:', data)})
  //     .catch(err => console.log('Error:', err))
  // }


for(let i = 0; i < dataWo.length; i++) {
  // console.log(dataWo[i])
}


  // console.log('right before the render', dataWo)
    if(!isFetching) {
      return (
        <>
        <div className="history-logo" id={darkModeOn ? "logo" : "logo2"}>Workout History</div>
        <div id="history-box">{dataWo}</div>
        </>
      )
    };
};

export default Workouts;