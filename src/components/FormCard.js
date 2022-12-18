import React from 'react';
import { Grid, Card } from '@mui/material';

function FormCard(props) {

const { formData, handleChange, darkModeOn } = props

  return (

    <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }} spacing={{ xs: 2, md: 3}} columns={{ xs: 1, sm: 2, md: 12 }}>

        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

            <div className={darkModeOn ? "form-card2" : "form-card"}>

            <label htmlFor="muscleGroup">{formData.muscleGroup0 ? "Let's Get it!" : "Choose muscle group:"}</label>

            <select
                id="muscleGroup"
                value={formData.muscleGroup0}
                onChange={handleChange}
                name="muscleGroup0"
            >
                <option value="none"></option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                {/* <option value="Abs">Abs</option>
                <option value="Calves">Calves</option> */}
            </select>

            <label htmlFor="exercise">{formData.exercise0 ? "Pump it up!" : "Choose exercise:"}</label>

            {formData.muscleGroup0 === "Chest" && 
                <select
                    id="exercise"
                    value={formData.exercise0}
                    onChange={handleChange}
                    name="exercise0"
                >
                    <option value="none"></option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Dumbell Press">Dumbell Press</option>
                    <option value="Cable Flyes">Cable Flyes</option>

                </select>
            }

            {formData.muscleGroup0 === "Back" && 
                <select
                    id="exercise"
                    value={formData.exercise0}
                    onChange={handleChange}
                    name="exercise0"
                >
                    <option value="none"></option>
                    <option value="Barbell Rows">Barbell Rows</option>
                    <option value="Pull-ups">Pull-ups</option>
                    <option value="Dumbell Rows">Dumbell Rows</option>

                </select>
            }

            {formData.muscleGroup0 === "Legs" && 
                <select
                    id="exercise"
                    value={formData.exercise0}
                    onChange={handleChange}
                    name="exercise0"
                >
                    <option value="none"></option>
                    <option value="Squat">Squat</option>
                    <option value="Romanian Deadlifts">Romanian Deadlifts</option>
                    <option value="Lunges">Lunges</option>

                </select>
            }

            {formData.muscleGroup0 === "Arms" && 
                <select
                    id="exercise"
                    value={formData.exercise0}
                    onChange={handleChange}
                    name="exercise0"
                >
                    <option value="none"></option>
                    <option value="Barbell Curls">Barbell Curls</option>
                    <option value="Dips">Dips</option>
                    <option value="Tricep Extensions">Tricep Extensions</option>

                </select>
            }

            {formData.muscleGroup0 === "Shoulders" && 
                <select
                    id="exercise"
                    value={formData.exercise0}
                    onChange={handleChange}
                    name="exercise0"
                >
                    <option value="none"></option>
                    <option value="Military Press">Military Press</option>
                    <option value="Dumbell Side Laterals">Dumbell Side Laterals</option>
                    <option value="Arnold Press">Arnold Press</option>

                </select>
            }

            <input
                type="text"
                placeholder="weight in lbs."
                onChange={handleChange}
                name="weight0"
                value={formData.weight0} 
            />
            <input
                type="text"
                placeholder="# of sets"
                onChange={handleChange}
                name="sets0"
                value={formData.sets0} 
            />
            <input
                type="text"
                placeholder="# of reps"
                onChange={handleChange}
                name="reps0"
                value={formData.reps0} 
            />   
            <input
                type="text"
                placeholder="rest in seconds"
                onChange={handleChange}
                name="rest0"
                value={formData.rest0} 
            />
            <input
                type="text"
                placeholder="RIR"
                onChange={handleChange}
                name="rir0"
                value={formData.rir0} 
            /> 
            <textarea
                value={formData.comments0}
                placeholder="Comments..."
                onChange={handleChange}
                name="comments0"
            />   

            </div>

        </Grid>

        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <div className={darkModeOn ? "form-card2" : "form-card"}>

            <label htmlFor="muscleGroup">{formData.muscleGroup1 ? "Let's Get it!" : "Choose muscle group:"}</label>

            <select
                id="muscleGroup"
                value={formData.muscleGroup1}
                onChange={handleChange}
                name="muscleGroup1"
            >
                <option value="none"></option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                {/* <option value="Abs">Abs</option>
                <option value="Calves">Calves</option> */}
            </select>

            <label htmlFor="exercise">{formData.exercise1 ? "Pump it up!" : "Choose exercise:"}</label>
            {formData.muscleGroup1 === "Chest" && 
                <select
                    id="exercise"
                    value={formData.exercise1}
                    onChange={handleChange}
                    name="exercise1"
                >
                    <option value="none"></option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Dumbell Press">Dumbell Press</option>
                    <option value="Cable Flyes">Cable Flyes</option>

                </select>
            }

            {formData.muscleGroup1 === "Back" && 
                <select
                    id="exercise"
                    value={formData.exercise1}
                    onChange={handleChange}
                    name="exercise1"
                >
                    <option value="none"></option>
                    <option value="Barbell Rows">Barbell Rows</option>
                    <option value="Pull-ups">Pull-ups</option>
                    <option value="Dumbell Rows">Dumbell Rows</option>

                </select>
            }

            {formData.muscleGroup1 === "Legs" && 
                <select
                    id="exercise"
                    value={formData.exercise1}
                    onChange={handleChange}
                    name="exercise1"
                >
                    <option value="none"></option>
                    <option value="Squat">Squat</option>
                    <option value="Romanian Deadlifts">Romanian Deadlifts</option>
                    <option value="Lunges">Lunges</option>

                </select>
            }

            {formData.muscleGroup1 === "Arms" && 
                <select
                    id="exercise"
                    value={formData.exercise1}
                    onChange={handleChange}
                    name="exercise1"
                >
                    <option value="none"></option>
                    <option value="Barbell Curls">Barbell Curls</option>
                    <option value="Dips">Dips</option>
                    <option value="Tricep Extensions">Tricep Extensions</option>

                </select>
            }

            {formData.muscleGroup1 === "Shoulders" && 
                <select
                    id="exercise"
                    value={formData.exercise1}
                    onChange={handleChange}
                    name="exercise1"
                >
                    <option value="none"></option>
                    <option value="Military Press">Military Press</option>
                    <option value="Dumbell Side Laterals">Dumbell Side Laterals</option>
                    <option value="Arnold Press">Arnold Press</option>

                </select>
            }

            <input
                type="text"
                placeholder="weight in lbs."
                onChange={handleChange}
                name="weight1"
                value={formData.weight1} 
            />
            <input
                type="text"
                placeholder="# of sets"
                onChange={handleChange}
                name="sets1"
                value={formData.sets1} 
            />
            <input
                type="text"
                placeholder="# of reps"
                onChange={handleChange}
                name="reps1"
                value={formData.reps1} 
            />   
            <input
                type="text"
                placeholder="rest in seconds"
                onChange={handleChange}
                name="rest1"
                value={formData.rest1} 
            />
            <input
                type="text"
                placeholder="RIR"
                onChange={handleChange}
                name="rir1"
                value={formData.rir1} 
            /> 
            <textarea
                value={formData.comments1}
                placeholder="Comments..."
                onChange={handleChange}
                name="comments1"
            />   

            </div>

        </Grid>

        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <div className={darkModeOn ? "form-card2" : "form-card"}>

            <label htmlFor="muscleGroup">{formData.muscleGroup2 ? "Let's Get it!" : "Choose muscle group:"}</label>

            <select
                id="muscleGroup"
                value={formData.muscleGroup2}
                onChange={handleChange}
                name="muscleGroup2"
            >
                <option value="none"></option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                {/* <option value="Abs">Abs</option>
                <option value="Calves">Calves</option> */}
            </select>

            <label htmlFor="exercise">{formData.exercise2 ? "Pump it up!" : "Choose exercise:"}</label>
            {formData.muscleGroup2 === "Chest" && 
                <select
                    id="exercise"
                    value={formData.exercise2}
                    onChange={handleChange}
                    name="exercise2"
                >
                    <option value="none"></option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Dumbell Press">Dumbell Press</option>
                    <option value="Cable Flyes">Cable Flyes</option>

                </select>
            }

            {formData.muscleGroup2 === "Back" && 
                <select
                    id="exercise"
                    value={formData.exercise2}
                    onChange={handleChange}
                    name="exercise2"
                >
                    <option value="none"></option>
                    <option value="Barbell Rows">Barbell Rows</option>
                    <option value="Pull-ups">Pull-ups</option>
                    <option value="Dumbell Rows">Dumbell Rows</option>

                </select>
            }

            {formData.muscleGroup2 === "Legs" && 
                <select
                    id="exercise"
                    value={formData.exercise2}
                    onChange={handleChange}
                    name="exercise2"
                >
                    <option value="none"></option>
                    <option value="Squat">Squat</option>
                    <option value="Romanian Deadlifts">Romanian Deadlifts</option>
                    <option value="Lunges">Lunges</option>

                </select>
            }

            {formData.muscleGroup2 === "Arms" && 
                <select
                    id="exercise"
                    value={formData.exercise2}
                    onChange={handleChange}
                    name="exercise2"
                >
                    <option value="none"></option>
                    <option value="Barbell Curls">Barbell Curls</option>
                    <option value="Dips">Dips</option>
                    <option value="Tricep Extensions">Tricep Extensions</option>

                </select>
            }

            {formData.muscleGroup2 === "Shoulders" && 
                <select
                    id="exercise"
                    value={formData.exercise2}
                    onChange={handleChange}
                    name="exercise2"
                >
                    <option value="none"></option>
                    <option value="Military Press">Military Press</option>
                    <option value="Dumbell Side Laterals">Dumbell Side Laterals</option>
                    <option value="Arnold Press">Arnold Press</option>

                </select>
            }

            <input
                type="text"
                placeholder="weight in lbs."
                onChange={handleChange}
                name="weight2"
                value={formData.weight2} 
            />
            <input
                type="text"
                placeholder="# of sets"
                onChange={handleChange}
                name="sets2"
                value={formData.sets2} 
            />
            <input
                type="text"
                placeholder="# of reps"
                onChange={handleChange}
                name="reps2"
                value={formData.reps2} 
            />   
            <input
                type="text"
                placeholder="rest in seconds"
                onChange={handleChange}
                name="rest2"
                value={formData.rest2} 
            />
            <input
                type="text"
                placeholder="RIR"
                onChange={handleChange}
                name="rir2"
                value={formData.rir2} 
            /> 
            <textarea
                value={formData.comments2}
                placeholder="Comments..."
                onChange={handleChange}
                name="comments2"
            />  

            </div>

        </Grid>

        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <div className={darkModeOn ? "form-card2" : "form-card"}>

            <label htmlFor="muscleGroup">{formData.muscleGroup3 ? "Let's Get it!" : "Choose muscle group:"}</label>

            <select
                id="muscleGroup"
                value={formData.muscleGroup3}
                onChange={handleChange}
                name="muscleGroup3"
            >
                <option value="none"></option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                {/* <option value="Abs">Abs</option>
                <option value="Calves">Calves</option> */}
            </select>

            <label htmlFor="exercise">{formData.exercise3 ? "Pump it up!" : "Choose exercise:"}</label>
            {formData.muscleGroup3 === "Chest" && 
                <select
                    id="exercise"
                    value={formData.exercise3}
                    onChange={handleChange}
                    name="exercise3"
                >
                    <option value="none"></option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Dumbell Press">Dumbell Press</option>
                    <option value="Cable Flyes">Cable Flyes</option>

                </select>
            }

            {formData.muscleGroup3 === "Back" && 
                <select
                    id="exercise"
                    value={formData.exercise3}
                    onChange={handleChange}
                    name="exercise3"
                >
                    <option value="none"></option>
                    <option value="Barbell Rows">Barbell Rows</option>
                    <option value="Pull-ups">Pull-ups</option>
                    <option value="Dumbell Rows">Dumbell Rows</option>

                </select>
            }

            {formData.muscleGroup3 === "Legs" && 
                <select
                    id="exercise"
                    value={formData.exercise3}
                    onChange={handleChange}
                    name="exercise3"
                >
                    <option value="none"></option>
                    <option value="Squat">Squat</option>
                    <option value="Romanian Deadlifts">Romanian Deadlifts</option>
                    <option value="Lunges">Lunges</option>

                </select>
            }

            {formData.muscleGroup3 === "Arms" && 
                <select
                    id="exercise"
                    value={formData.exercise3}
                    onChange={handleChange}
                    name="exercise3"
                >
                    <option value="none"></option>
                    <option value="Barbell Curls">Barbell Curls</option>
                    <option value="Dips">Dips</option>
                    <option value="Tricep Extensions">Tricep Extensions</option>

                </select>
            }

            {formData.muscleGroup3 === "Shoulders" && 
                <select
                    id="exercise"
                    value={formData.exercise3}
                    onChange={handleChange}
                    name="exercise3"
                >
                    <option value="none"></option>
                    <option value="Military Press">Military Press</option>
                    <option value="Dumbell Side Laterals">Dumbell Side Laterals</option>
                    <option value="Arnold Press">Arnold Press</option>

                </select>
            }

            <input
                type="text"
                placeholder="weight in lbs."
                onChange={handleChange}
                name="weight3"
                value={formData.weight3} 
            />
            <input
                type="text"
                placeholder="# of sets"
                onChange={handleChange}
                name="sets3"
                value={formData.sets3} 
            />
            <input
                type="text"
                placeholder="# of reps"
                onChange={handleChange}
                name="reps3"
                value={formData.reps3} 
            />   
            <input
                type="text"
                placeholder="rest in seconds"
                onChange={handleChange}
                name="rest3"
                value={formData.rest3} 
            />
            <input
                type="text"
                placeholder="RIR"
                onChange={handleChange}
                name="rir3"
                value={formData.rir3} 
            /> 
            <textarea
                value={formData.comments3}
                placeholder="Comments..."
                onChange={handleChange}
                name="comments3"
            />   

            </div>

        </Grid>

        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

        <div className={darkModeOn ? "form-card2" : "form-card"}>

            <label htmlFor="muscleGroup">{formData.muscleGroup4 ? "Let's Get it!" : "Choose muscle group:"}</label>

            <select
                id="muscleGroup"
                value={formData.muscleGroup4}
                onChange={handleChange}
                name="muscleGroup4"
            >
                <option value="none"></option>
                <option value="Chest">Chest</option>
                <option value="Back">Back</option>
                <option value="Legs">Legs</option>
                <option value="Arms">Arms</option>
                <option value="Shoulders">Shoulders</option>
                {/* <option value="Abs">Abs</option>
                <option value="Calves">Calves</option> */}
            </select>

            <label htmlFor="exercise">{formData.exercise4 ? "Pump it up!" : "Choose exercise:"}</label>

            {formData.muscleGroup4 === "Chest" && 
                <select
                    id="exercise"
                    value={formData.exercise4}
                    onChange={handleChange}
                    name="exercise4"
                >
                    <option value="none"></option>
                    <option value="Bench Press">Bench Press</option>
                    <option value="Dumbell Press">Dumbell Press</option>
                    <option value="Cable Flyes">Cable Flyes</option>

                </select>
            }

            {formData.muscleGroup4 === "Back" && 
                <select
                    id="exercise"
                    value={formData.exercise4}
                    onChange={handleChange}
                    name="exercise4"
                >
                    <option value="none"></option>
                    <option value="Barbell Rows">Barbell Rows</option>
                    <option value="Pull-ups">Pull-ups</option>
                    <option value="Dumbell Rows">Dumbell Rows</option>

                </select>
            }

            {formData.muscleGroup4 === "Legs" && 
                <select
                    id="exercise"
                    value={formData.exercise4}
                    onChange={handleChange}
                    name="exercise4"
                >
                    <option value="none"></option>
                    <option value="Squat">Squat</option>
                    <option value="Romanian Deadlifts">Romanian Deadlifts</option>
                    <option value="Lunges">Lunges</option>

                </select>
            }

            {formData.muscleGroup4 === "Arms" && 
                <select
                    id="exercise"
                    value={formData.exercise4}
                    onChange={handleChange}
                    name="exercise4"
                >
                    <option value="none"></option>
                    <option value="Barbell Curls">Barbell Curls</option>
                    <option value="Dips">Dips</option>
                    <option value="Tricep Extensions">Tricep Extensions</option>

                </select>
            }

            {formData.muscleGroup4 === "Shoulders" && 
                <select
                    id="exercise"
                    value={formData.exercise4}
                    onChange={handleChange}
                    name="exercise4"
                >
                    <option value="none"></option>
                    <option value="Military Press">Military Press</option>
                    <option value="Dumbell Side Laterals">Dumbell Side Laterals</option>
                    <option value="Arnold Press">Arnold Press</option>

                </select>
            }

            <input
                type="text"
                placeholder="weight in lbs."
                onChange={handleChange}
                name="weight4"
                value={formData.weight4} 
            />
            <input
                type="text"
                placeholder="# of sets"
                onChange={handleChange}
                name="sets4"
                value={formData.sets4} 
            />
            <input
                type="text"
                placeholder="# of reps"
                onChange={handleChange}
                name="reps4"
                value={formData.reps4} 
            />   
            <input
                type="text"
                placeholder="rest in seconds"
                onChange={handleChange}
                name="rest4"
                value={formData.rest4} 
            />
            <input
                type="text"
                placeholder="RIR"
                onChange={handleChange}
                name="rir4"
                value={formData.rir4} 
            /> 
            <textarea
                value={formData.comments4}
                placeholder="Comments..."
                onChange={handleChange}
                name="comments4"
            />   

            </div>

        </Grid>

    </Grid>
    
  )
};

export default FormCard;