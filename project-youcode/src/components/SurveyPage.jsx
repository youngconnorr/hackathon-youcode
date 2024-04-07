// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore'

// const firestore = firebase.firestore();


const SurveyPage = () => {

  const [question, setQuestion] = useState(1)
  const [mental, setMental] = useState(false)
  const [physical, setPhysical] = useState(false)

  function next_question() {
    setQuestion(question + 1)
  }

  return (

    <div>
      <div className="Question_1">
        <h1>Question {question}</h1>
        <p>What would you like to work on today?</p>
        <button className="Physical"
          onClick={() => {
            setPhysical(true)
            next_question()
            console.log(physical)
            console.log(mental)
          }}>
          Physical Wellness
        </button>
        <button className="Mental"
          onClick={() => {
            setMental(true)
            next_question()
            console.log(physical)
          }}>
          Mental Wellness
        </button>

      </div>
      <div>
        {physical ? <p>physical state</p> : <p>mental state</p>}
      </div>

    </div>
  )
}

// function UserInput() {
//     const userStreak = firestore.collection('streak');

// }


export default SurveyPage