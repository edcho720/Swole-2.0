import React, { useState, useEffect } from 'react';
import WorkoutCard from './WorkoutCard';

/* Workout History Page */

function Workouts(props) {

  const { darkModeOn } = props;

  const [fetchedWos, setFetchedWos] = useState([]);

  const [ isFetching , setIsFetching ] = useState(true);

  const [ loop, setLoop ] = useState(true);

  setTimeout(() => {
    console.log(loop)
    setLoop(old => !old)
  }, 2000);

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
        });

        // setTimeout( ()=> location.reload(), 5000);

    }, [/* fetchedWos */] ); 
    // runs only on first render, don't include it and it will run on every render

    const fetchedData = fetchedWos.reverse();

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

for(let i = 0; i < dataWo.length; i++) {
  // console.log(dataWo[i])
}
  // console.log('right before the render', dataWo)
    if(!isFetching) {
      return (
        <div className={darkModeOn ? 'history2-box' : 'history-box'}>
          <div id={darkModeOn ? "logo" : "logo2"}>Workout History</div>
          <div className='historycards-box'>{dataWo}</div>
        </div>
      )
    };
};

export default Workouts;