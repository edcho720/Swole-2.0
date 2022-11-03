import React, { useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Workouts from './Workouts'
import Form from './Form'
import Login from './Login'
import About from './About'
import Error from './Error'
import css from '../style.css';


function App() {

  const [timer, setTimer] = useState(0);
  const [ timerOn, setTimerOn ] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [ darkModeOn, setDarkModeOn ] = useState(false)

  function toggleDarkMode() {
    setDarkModeOn(old => !old)
  }

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

  // '/api/workouts' //

  return (
              <>
                <nav id={darkModeOn ? 'navbar2' : 'navbar'}>
                    <Link to="/about"><button className={darkModeOn ? "sub-links" : "sub-links2"}>About</button></Link>
                    <Link to="/main"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Main</button></Link>
                    <Link to="/history"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Workout History</button></Link>
                    <Link to="/"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Log-in</button></Link>
                </nav>
                <Login darkModeOn={darkModeOn}/>
                <Form 
                    timer={timer}
                    showTimer={showTimer} 
                    startTimer={startTimer} 
                    resetTimer={resetTimer}
                    endTimer={endTimer}
                    toggle={toggle}
                    timerOn={timerOn}
                    toggleDarkMode={toggleDarkMode} 
                    darkModeOn={darkModeOn}/>
                <Workouts darkModeOn={darkModeOn}/>

              {/* <Routes>
                    <Route path='/' element={<Login darkModeOn={darkModeOn}/>} /> 
                    <Route path='/about' element={About} />
                    <Route element={Error} />
                    <Route path='/history' element={<Workouts darkModeOn={darkModeOn}/>} />
                    <Route path='/main' element={<Form 
                    timer={timer}
                    showTimer={showTimer} 
                    startTimer={startTimer} 
                    resetTimer={resetTimer}
                    endTimer={endTimer}
                    toggle={toggle}
                    timerOn={timerOn}
                    toggleDarkMode={toggleDarkMode} 
                    darkModeOn={darkModeOn}/>} />
              </Routes> */}
              </>
    )
  };
export default App;