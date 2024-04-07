// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore'


// const firestore = firebase.firestore();


const MixPage = () => {


const [num, setNum] = useState(2);


function increment(){
    setNum(num + 1)
}
 
    return (
        <div>
            <h1>Lets get breathing and moving</h1>
            <div className="Question_2">
                {(num == 2) ?
                <div><h2>Question 2</h2><div/>
                <p>What is your excercise goal for today?</p>
                <div>
                    <button onClick={increment}>Just getting moving</button>
                    <button onClick={increment}>Losing weight</button>
                    <button onClick={increment}>Toning abs</button>
                    <button onClick={increment}>Building upper body muscle</button>
                    <button onClick={increment}>Building lower body muscle</button>
                    <button onClick={increment}>Flexibility</button>


                </div>
            </div>
            :
            null
             }
               
            </div>
           
            <div className="Question_3">
                {(num == 3) ?
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
           
            <div className="Question_4">
                {(num == 4) ?
                <div>
                    <h2>Question 4</h2>
                    <p>How intense would you like your excercise to be today?</p>
                    <div>
                        <button onClick={increment}>Easy</button>
                        <button onClick={increment}>Medium</button>
                        <button onClick={increment}>Hard</button>
                    </div>
                </div>
               
                : null}
            </div>


            <div>
                {(num == 5) ? <p>New Space</p> : null}
            </div>
        </div>
    )
  }
 
 
  export default MixPage