import React, { useState, useEffect } from 'react'
import Workouts from './Workouts'
import Header from './Header'
import Form from './Form'
import css from '../style.css';


function App() {

  const [timer, setTimer] = useState(0);
  const [ timerOn, setTimerOn ] = useState(false)
  const [toggle, setToggle] = useState(false)

  function showTimer() {
    setTimerOn(true)
    setTimer(old => 0)
  }

  function startTimer() {
    setToggle(true)
    if(timerOn){
      setInterval(()=> {
        setTimer(old => old + 1);
        console.log(timer)
      }, 1000)
    }
  }

  function resetTimer() {
    setTimer(old => 0);
  }

  function endTimer() {
    setTimerOn(false)
    setTimer(old => null); 
  }

  return (
    <>
      <Header 
        className="header-container" 
        timer={timer}
        showTimer={showTimer} 
        startTimer={startTimer} 
        resetTimer={resetTimer}
        endTimer={endTimer}
        toggle={toggle}
        timerOn={timerOn}
        />
      <Form />
      <hr></hr>
      <Workouts />
    </>

  )
};

export default App;