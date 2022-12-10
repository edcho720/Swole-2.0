import React, { useEffect, useState } from 'react'
import History from './History'
import FormCard from './FormCard'
import { Link, useNavigate } from 'react-router-dom'
import css from '../style.css';

function Form(props) {

    const navigate = useNavigate();

    const { timerOn, timer, showTimer, startTimer, endTimer, resetTimer, toggle, darkModeOn, toggleDarkMode } = props;

    const [formData, setFormData] = useState(
        {
            exercise0: "",
            muscleGroup0: "",
            weight0: "",
            sets0: "",
            reps0: "",
            rest0: "",
            rir0: "",
            comments0: "",
            exercise1: "",
            muscleGroup1: "",
            weight1: "",
            sets1: "",
            reps1: "",
            rest1: "",
            rir1: "",
            comments1: "",
            exercise2: "",
            muscleGroup2: "",
            weight2: "",
            sets2: "",
            reps2: "",
            rest2: "",
            rir2: "",
            comments2: "",
            exercise3: "",
            muscleGroup3: "",
            weight3: "",
            sets3: "",
            reps3: "",
            rest3: "",
            rir3: "",
            comments3: "",
            exercise4: "",
            muscleGroup4: "",
            weight4: "",
            sets4: "",
            reps4: "",
            rest4: "",
            rir4: "",
            comments4: "",
        }
    );

    const [ time, setTime ] = useState(
        {
        startDate: '', 
        startTime: '', 
        endDay: '', 
        endTime: '',
        duration: 0
        }
    );

    const [ timer1, setTimer1 ] = useState(0)


    function startWorkout(e) {
        e.preventDefault()
        const startD = new Date().toDateString();
        const startT = new Date().toTimeString();

        setInterval(() => {
            setTimer1(old => old + 1);
        }, 1000)

        console.log('start', startT)
        setTime(old => {
            return (
                { ...old, startDate: startD, startTime: startT }
                )
        });
    };

    function endWorkout(e) {
        e.preventDefault()
        const endD = new Date().toDateString();
        const endT = new Date().toTimeString();
        const length = timer / 60;

        console.log('end', timer)

        setTime(old => {
            return (
                { ...old, endDay: endD, endTime: endT, duration: length }
                )
        });
    };


    function handleChange(e) {
        const {name, value, type, checked} = e.target;
        setFormData(oldData => {
            return (
                {
                ...oldData,
                [name]: type === "checkbox" ? checked : value
                }
            )
/*         setTimeout(()=> {console.log('formData:', formData)}, 2000) */
        })
        console.log('formData', formData)
    };

    const postBody = {...formData, ...time}

    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(postBody)
    };
  
    function handleSave(e) {

        e.preventDefault();

        console.log('saved')

        fetch('/api/workouts', options)
          .then( res => res.json())
          .then( data => {
            console.log(data)
          })
          .catch(err => console.log('Error:', err));
          
        setFormData(old => {
            return (
                {
                    exercise0: "",
                    muscleGroup0: "",
                    weight0: "",
                    sets0: "",
                    reps0: "",
                    rest0: "",
                    rir0: "",
                    comments0: "",
                    exercise1: "",
                    muscleGroup1: "",
                    weight1: "",
                    sets1: "",
                    reps1: "",
                    rest1: "",
                    rir1: "",
                    comments1: "",
                    exercise2: "",
                    muscleGroup2: "",
                    weight2: "",
                    sets2: "",
                    reps2: "",
                    rest2: "",
                    rir2: "",
                    comments2: "",
                    exercise3: "",
                    muscleGroup3: "",
                    weight3: "",
                    sets3: "",
                    reps3: "",
                    rest3: "",
                    rir3: "",
                    comments3: "",
                    exercise4: "",
                    muscleGroup4: "",
                    weight4: "",
                    sets4: "",
                    reps4: "",
                    rest4: "",
                    rir4: "",
                    comments4: "",
                }
            );
        });

        setTime(old => {
            return (
                {
                startDate: '', 
                startTime: '', 
                endDay: '', 
                endTime: '',
                duration: 0
                }
            )
        });
        setTimer1(old => 0);
        navigate('./')
        console.log('workout saved');
    };


  return (

<>
    
    <div className={darkModeOn ? 'body2' : 'body'} >
        {/* <div className="links"> */}
        {/* <button id={darkModeOn ? 'toggler1' : 'toggler2'} onClick={toggleDarkMode} >Log-in</button> */}
        {/* <button id={darkModeOn ? 'toggler1' : 'toggler2'} onClick={toggleDarkMode} >{darkModeOn ? 'Light Mode' : 'Dark Mode'} </button> */}
        {/* <div className="sublinks-box"> */}
          {/* <Link to="/about"><button className={darkModeOn ? "sub-links" : "sub-links2"}>About</button></Link> */}
          
          {/* <Link to="/history"><button className={darkModeOn ? "sub-links" : "sub-links2"}>Workout History</button></Link> */}
        {/* </div> */}
        {/* </div>   */}

    <div className="header-style">
        <div id={darkModeOn ? "logo" : "logo2"}>Swole</div>
        <div id="timer">
        <button className="button-style" onClick={showTimer}>{!toggle ? 'Show Timer' : 'Start Timer'}</button><br />
        {!toggle && timer === 0 && <button className="button-style" onClick={startTimer}>Start Timer</button>}<br />
        <button className="button-style" onClick={resetTimer}>Reset Timer</button><br />
        <button className="button-style" id="end-button" onClick={endTimer}>End Timer</button><br /><br />
        </div>
        <div id={darkModeOn ? "clock" : "clock2"}>{timerOn && `Seconds elapsed: ${timer}`}</div>
        </div>
    </div>

    <div className={darkModeOn ? 'body2' : 'body'}>

        <form className="form-display" onSubmit={endWorkout}>
            <button className="button-style" id="jump-button" onClick={startWorkout}>Start Workout</button><br />
                    <FormCard formData={formData} handleChange={handleChange} darkModeOn={darkModeOn} />
            <button className="button-style" id="end-button" onClick={endWorkout}>End Workout</button>
        </form>    
        <hr></hr>
            <div id="history-box">
            <History className="history-card" formData={formData} time={time} saveWorkout={handleSave} darkModeOn={darkModeOn}/>
            </div>
    </div>
    </>
  )
}

export default Form;