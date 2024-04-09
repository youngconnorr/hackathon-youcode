// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
import SurveyImage3 from '../assets/survey-page-3-youcode.png';
import SurveyImage2 from '../assets/survey-page-2-youcode.png';
import SurveyImage from '../assets/survey-page-1-youcode.png';
import Meditation from '../assets/meditation.gif';
// import { useCollectionData } from 'react-firebase-hooks/firestore'


// const firestore = firebase.firestore();


const MentalPage = (curStreak) => {

    const [num, setNum] = useState(2);

    const plusCurStreak = () => {
        curStreak.incrementCurStreak()
    }

    function increment() {
        setNum(num + 1)
    }

    return (
        <div>
            <h1 className="inspiringCaption">Lets get breathing</h1>
            <div className="question-card">
                {(num === 2) ?
                    <div><h2>Question 2</h2><div />
                        <p>What is your meditation goals for today?</p>
                        <div className="question-container">
                            <button onClick={increment}>Just relaxing</button>
                            <button onClick={increment}>Being present</button>
                            <button onClick={increment}>Breathing exercises</button>
                        </div>
                    </div>
                    :
                    null
                }

            </div>

            <div className="question-card">
                {(num === 3) ?
                    <div>
                        <h2>Question 3</h2>
                        <p>How much time are you able to devote to your progress today?</p>
                        <div>
                            <button onClick={increment}>5 minutes</button>
                            <button onClick={increment}>10 minutes</button>
                            <button onClick={increment}>15 minutes</button>
                            <button onClick={increment}>20 minutes</button>
                            <button onClick={increment}>30 minutes</button>
                            <button onClick={increment}>40 minutes</button>
                        </div>
                    </div>
                    : null}
            </div>

            <div>
                {(num === 4) ?
                    <div className="question-container">
                        <button className="addStreak" onClick={plusCurStreak}>Add to your streak!</button>
                        <button onClick={increment}>Submit answer!</button>
                    </div>

                    :

                    null
                }
            </div>

            
            <div>
                {(num === 5) ?
                    <img src={Meditation} alt="" className="med-image"/>
                    :
                    null
                }
            </div>


            <div className="Image-card">
                {(num === 2) ? <img className="side-image" src={SurveyImage2} alt="" /> : null}
                {(num === 3) ? <img className="side-image" src={SurveyImage3} alt="" /> : null}
                {(num === 4) ? <img className="side-image" src={SurveyImage} alt="" /> : null}
                {(num === 5) ? <img className="side-image" src={SurveyImage} alt="" /> : null}


            </div>
        </div>
    )
}


export default MentalPage

