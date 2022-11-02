import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Workouts from './Workouts'
import Header from './Header'
import Form from './Form'
import Login from './Login'
import Links from './Links'
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

  return (
      <>
              <Login darkModeOn={darkModeOn}/>
              <div className={darkModeOn ? 'body2' : 'body'}>
                <Links 
                  darkModeOn={darkModeOn} 
                  toggleDarkMode={toggleDarkMode} 
                />
                <Header 
                  className="header-container" 
                  timer={timer}
                  showTimer={showTimer} 
                  startTimer={startTimer} 
                  resetTimer={resetTimer}
                  endTimer={endTimer}
                  toggle={toggle}
                  timerOn={timerOn}
                  darkModeOn={darkModeOn}
                />
                <Form darkModeOn={darkModeOn}/>
                <Workouts darkModeOn={darkModeOn}/>
              </div>
              {/* <Workouts darkModeOn={darkModeOn}/> */}
      </>
    // <Routes>
    //   <>
    //     <Route path='./login' element={<Login darkModeOn={darkModeOn}/>} /> 
    //     <Route exact path='/' element={
    //       <div className={darkModeOn ? 'body2' : 'body'}>
    //         <Links 
    //           darkModeOn={darkModeOn} 
    //           toggleDarkMode={toggleDarkMode} 
    //         />
    //         <Header 
    //           className="header-container" 
    //           timer={timer}
    //           showTimer={showTimer} 
    //           startTimer={startTimer} 
    //           resetTimer={resetTimer}
    //           endTimer={endTimer}
    //           toggle={toggle}
    //           timerOn={timerOn}
    //           darkModeOn={darkModeOn}
    //         />
    //         <Form darkModeOn={darkModeOn}/>
    //       </div>
    //       } 
    //     />
    //     <Route path='/login' element={<Login darkModeOn={darkModeOn}/>} /> 
    //     <Route path='/history' element={<Workouts darkModeOn={darkModeOn}/>} /> 
    //   </> 
    // </Routes>

    )
  };



export default App;