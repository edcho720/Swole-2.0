import React, {useEffect} from 'react'
import css from '../style.css';

function Header(props) {

    const { timerOn, timer, showTimer, startTimer, endTimer, resetTimer, toggle } = props
  return (
    <div className="header-style">
        <div id="logo">Workout Logger</div>
        <div id="timer">
          <button className="button-style" onClick={showTimer}>{!toggle ? 'Show Timer' : 'Start Timer'}</button><br />
          {!toggle && timer === 0 && <button className="button-style" onClick={startTimer}>Start Timer</button>}<br />
          <button className="button-style" onClick={resetTimer}>Reset Timer</button><br />
          <button className="button-style" onClick={endTimer}>End Timer</button><br /><br />
        </div>
        <div id="clock">{timerOn && `Seconds elapsed: ${timer}`}</div>

    </ div>
  )
}

export default Header;