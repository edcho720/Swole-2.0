import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Workouts from './Workouts';
import Form from './Main';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import css from '../style.css';


function App() {

  const [timer, setTimer] = useState(0);// timer state

  const [ timerOn, setTimerOn ] = useState(false);// timer state 

  const [toggle, setToggle] = useState(false);

  const [ darkModeOn, setDarkModeOn ] = useState(true);// dark mode 

  const [ user, setUser ] = useState(null); // user defaulted to null until a user logs in


  function toggleDarkMode() {
    setDarkModeOn(old => !old)
  };

  function showTimer() {
    setTimerOn(true)
    setTimer(old => 0)
  };

  function startTimer() {
    setToggle(true)
    if(timerOn){
      setInterval(()=> {
        setTimer(old => old + 1);
        console.log(timer)
      }, 1000)
    }
  };

  function resetTimer() {
    setTimer(old => 0);
  };

  function endTimer() {
    setTimerOn(false)
    setTimer(old => null); 
  };

  const navigate = useNavigate()

  function goToMain() {
    navigate('./main')
  };

  // '/api/workouts' //

  return (
              
              <div role='main-body'>

                {/* the header is always rendered on the page */}

                <Navbar darkModeOn={darkModeOn} toggleDarkMode={toggleDarkMode} user={user} />

                {/* when a user is not logged in, only the login and sginup page are available to view */}

                {!user && 

                <Routes>

                  <Route 
                    path='/' 
                    element={<Login 
                    darkModeOn={darkModeOn}

                    onClick={goToMain}/>} 

                    user={user}
                    setUser={setUser}
                  /> 

                  <Route 
                    path='/signup' 
                    element={<Signup 
                    darkModeOn={darkModeOn}

                    onClick={goToMain}/>} 

                    user={user}
                    setUser={setUser}
                  /> 

                </Routes>}

                {/* once user logs in a new set of routes are available */}

                {user && 
                
                <Routes>

                      <Route path='/main'
                        element={<Form
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
                        path='/history'
                        element={<Workouts 
                        darkModeOn={darkModeOn}/>} 
                      />

                </Routes>}

              </div>
    )
  };

export default App;