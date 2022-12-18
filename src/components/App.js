import React, { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Workouts from './Workouts'
import Form from './Form'
import Login from './Login'
import Signup from './Signup'
// import About from './About'
// import Error from './Error';
import Navbar from './Navbar';
import css from '../style.css';

// import { Box, AppBar, Toolbar, Typography, button, IconButton } from '@mui/material';


function App() {

  const [timer, setTimer] = useState(0);
  const [ timerOn, setTimerOn ] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [ darkModeOn, setDarkModeOn ] = useState(true);

  const [ user, setUser ] = useState('user'); // user defaulted to null until a user logs in


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
  const navigate = useNavigate()

  function goToMain() {
    navigate('./main')
  }

  // '/api/workouts' //

  return (
              <div>

                <Navbar darkModeOn={darkModeOn} toggleDarkMode={toggleDarkMode}/>



                {/* <nav id={darkModeOn ? 'navbar2' : 'navbar'}> */}

                    {/* <Link to="/about"><button className={darkModeOn ? "sub-links" : "sub-links2"}>About</button></Link> */}
                    {/* <button id={darkModeOn ? 'toggler1' : 'toggler2'} onClick={toggleDarkMode} >{darkModeOn ? 'Light Mode' : 'Dark Mode'} </button>
                    <Link to="/main"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Main</button></Link>
                    <Link to="/history"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Workout History</button></Link> */}
                    {/* <Link to="/"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Log-in</button></Link> */}
                {/* </nav> */}

                {/* <Login darkModeOn={darkModeOn}/>
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
                <Workouts darkModeOn={darkModeOn}/> */}

                {!user && 
                <Routes>

                  <Route 
                    path='/' 
                    element={<Login 
                    darkModeOn={darkModeOn} 
                    onClick={goToMain}/>} 
                  /> 
                  <Route 
                    path='/signup' 
                    element={<Signup 
                    darkModeOn={darkModeOn} 
                    onClick={goToMain}/>} 
                  /> 

                </Routes>}



                {user && 
                
                <Routes>
                      {/* <Route path='/' element={<Login darkModeOn={darkModeOn}/>} /> */}
                      
                      {/* <Route path='/about' element={About} />

                      <Route element={Error} /> */}

                      <Route path='/main' element={<Form /* was main */
                        timer={timer}
                        showTimer={showTimer} 
                        startTimer={startTimer} 
                        resetTimer={resetTimer}
                        endTimer={endTimer}
                        toggle={toggle}
                        timerOn={timerOn}
                        toggleDarkMode={toggleDarkMode} 
                        darkModeOn={darkModeOn}/>} 
                      />

                      <Route 
                        path='/history' /* was history */
                        element={<Workouts 
                        darkModeOn={darkModeOn}/>} 
                      />

                </Routes>}

              </div>
    )
  };
export default App;