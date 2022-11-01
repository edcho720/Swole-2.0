import React, { useState, useEffect } from 'react'
import WorkoutCard from './WorkoutCard'

function Workouts() {

  const [fetchedWos, setFetchedWos] = useState({ workouts: [] })

    useEffect(() => {

      fetch('/api/workouts')
        .then(res => res.json()) // expecting an array of objects


          // console.log('res json', res)
          // console.log('res2 json', res)
        .then(data => {  // data is an array

          console.log('data', data)
          // if(!Array.isArray(data)) data = [];
          setFetchedWos(old => {
            return (
              { workouts: data }
            )
          })
          console.log("GET data on LOAD:", fetchedWos.workouts);
        }).catch(err => {
          console.log('GET on LOAD Error:', err)
        })

    }, []); // runs only on first render, don't include it and it will run on every render

    console.log(fetchedWos.workouts)

    // const allWorkouts = fetchedWos.workouts.map( wo => {
    //   return (
    //     <WorkoutCard 
    //       workoutData={wo}
    //     />
    //   )
    // })


  return (
    <div className="history-container">
      {/* {allWorkouts} */}
    </div>
  )
}

export default Workouts;