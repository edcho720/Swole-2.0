import React, { useState, useEffect, useQuery } from 'react'
import WorkoutCard from './WorkoutCard'

function Workouts(props) {

  const { darkModeOn } = props

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

      
          console.log('this is the data',data)

          setFetchedWos(old => [...data] )

          if(fetchedWos[0]) {

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
        }
        })// data is supposed to be an array, but ret undefined
        .catch(err => {
          console.log('GET req error on LOAD Error:', err)
        })
    }, []); // runs only on first render, don't include it and it will run on every render

    const fetchedData = fetchedWos;

    const dataWo = fetchedData.map( wo => {

      console.log(wo._id)
      return (
        <WorkoutCard 
          id={wo._id}
          darkModeOn={darkModeOn}
          removeWorkout={removeWorkout}
          editWorkout={editWorkout}
          workoutData={wo}
        />
      )
    });


  function removeWorkout() {
      console.log('delete');
  }
  
  function editWorkout() {
      console.log('edit');
  }

  console.log('right before the render', dataWo)
    if(!isFetching) {
      return (
        <>{dataWo}</>
      )
    };
};

export default Workouts;