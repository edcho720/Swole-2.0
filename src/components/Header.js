// import React, {useEffect} from 'react'
// import { Link } from 'react-router-dom'
// import css from '../style.css';
// import Links from './Links'

// function Header(props) {

//     const { timerOn, timer, showTimer, startTimer, endTimer, resetTimer, toggle, darkModeOn, toggleDarkMode } = props;

//   return (
//     <div className="header-container">
//       <div className={darkModeOn ? 'body2' : 'body'} >
//         <div className="links">
//           <button id={darkModeOn ? 'toggler1' : 'toggler2'} onClick={toggleDarkMode} >{darkModeOn ? 'Light Mode' : 'Dark Mode'} </button>
//           <div className="sublinks-box">
//             <Link to="/about"><button className={darkModeOn ? "sub-links" : "sub-links2"}>About</button></Link>
//             <Link to="/history"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Workout History</button></Link>
//           </div>
//         </div>
//       </div>  
//       <div className="header-style">
//         <div id={darkModeOn ? "logo" : "logo2"}>Swole</div>
//         <div id="timer">
//           <button className="button-style" onClick={showTimer}>{!toggle ? 'Show Timer' : 'Start Timer'}</button><br />
//           {!toggle && timer === 0 && <button className="button-style" onClick={startTimer}>Start Timer</button>}<br />
//           <button className="button-style" onClick={resetTimer}>Reset Timer</button><br />
//           <button className="button-style" id="end-button" onClick={endTimer}>End Timer</button><br /><br />
//         </div>
//         <div id={darkModeOn ? "clock" : "clock2"}>{timerOn && `Seconds elapsed: ${timer}`}</div>
//       </div>
//     </div>
//   )
// }

// export default Header;