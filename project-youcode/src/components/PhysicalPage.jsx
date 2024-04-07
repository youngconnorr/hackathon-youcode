// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import SurveyImage3 from '../assets/survey-page-3-youcode.png';
import SurveyImage2 from '../assets/survey-page-2-youcode.png';
import SurveyImage from '../assets/survey-page-1-youcode.png';




// const firestore = firebase.firestore();








const PhysicalPage = (curStreak) => {


    const [num, setNum] = useState(2);

    const plusCurStreak = () => {
        curStreak.incrementCurStreak()
    }

    function increment() {
        setNum(num + 1)
    }

    return (
        <div>
            <h1 className="inspiringCaption">lets get breathing and moving</h1>
            <div className="question-card">
                {(num === 2) ?
                    <div><h2>question 2</h2><div />
                        <p>what is your excercise goal for today?</p>
                        <div className="question-container">
                            <button onClick={increment}>just getting moving</button>
                            <button onClick={increment}>losing weight</button>
                            <button onClick={increment}>toning abs</button>
                            <button onClick={increment}>building upper body muscle</button>
                            <button onClick={increment}>building lower body muscle</button>
                            <button onClick={increment}>flexibility</button>

                        </div>
                    </div>
                    :
                    null
                }

            </div>

            <div className="question-card">
                {(num === 3) ?
                    <div>
                        <h2>question 3</h2>
                        <p>How much time are you able to devote to your progress today?</p>
                        <div className="question-container">
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

            <div className="question-card">
                {(num === 4) ?
                    <div>
                        <h2>question 4</h2>
                        <p>how intense would you like your excercise to be today?</p>
                        <div className="question-container">
                            <button onClick={increment}>easy</button>
                            <button onClick={increment}>medium</button>
                            <button onClick={increment}>hard</button>
                        </div>
                    </div>

                    : null}
            </div>


            <div>
                {(num === 5) ?
                    <div>
                        <button className="" onClick={plusCurStreak}>Add to your streak!</button>
                        <button onClick={increment}>Submit answer!</button>
                    </div>
                    :
                    null
                }
            </div>


            <div className="Image-card">
                {(num === 2) ? <img className="side-image" src={SurveyImage2} alt="" /> : null}
                {(num === 3) ? <img className="side-image" src={SurveyImage3} alt="" /> : null}
                {(num === 4) ? <img className="side-image" src={SurveyImage} alt="" /> : null}


            </div>

        </div>
    )
}

export default PhysicalPage