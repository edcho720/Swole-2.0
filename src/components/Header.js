import React, {useEffect} from 'react'
// import { Link, Switch} from 'react-router-dom'
import css from '../style.css';

function Header(props) {

    const { timerOn, timer, showTimer, startTimer, endTimer, resetTimer, toggle, darkModeOn } = props
  return (
    <div className="header-style">
        <div id={darkModeOn ? "logo" : "logo2"}>Workout Logger</div>
        <div id="timer">
          <button className="button-style" onClick={showTimer}>{!toggle ? 'Show Timer' : 'Start Timer'}</button><br />
          {!toggle && timer === 0 && <button className="button-style" onClick={startTimer}>Start Timer</button>}<br />
          <button className="button-style" onClick={resetTimer}>Reset Timer</button><br />
          <button className="button-style" id="end-button" onClick={endTimer}>End Timer</button><br /><br />
        </div>
        <div id={darkModeOn ? "clock" : "clock2"}>{timerOn && `Seconds elapsed: ${timer}`}</div>
    </ div>
  )
}

export default Header;