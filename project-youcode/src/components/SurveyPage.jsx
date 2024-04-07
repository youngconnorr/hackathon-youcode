// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore'


import PhysicalPage from './PhysicalPage';
import MentalPage from './MentalPage';
import MixPage from './MixPage';
// const firestore = firebase.firestore();






const SurveyPage = () => {


  const [question, setQuestion] = useState(1)
  const [mental, setMental] = useState(false)
  const [physical, setPhysical] = useState(false)
  const[mix, setMix] = useState(false)


  function next_question() {
    setQuestion(question + 1)
  }


  return (


    <div>
      <div className="Question_1">
        <h1>Question 1</h1>
        <p>What would you like to work on today?</p>
        <button className={physical ? "hidden" : "physical"}
          onClick={() => {
            setPhysical(true)
            setMental(false)
            setMix(false)
            next_question()
            console.log(physical)
            console.log(mental)
          }}>
          Physical Wellness
        </button>
        <button className="Mental"
          onClick={() => {
            setPhysical(false)
            setMental(true)
            setMix(false)
            next_question()
            console.log(physical)
          }}>
          Mental Wellness
        </button>


        <button onClick={() => {
          next_question()
          setMix(true)
          setPhysical(false)
          setMental(false)
        }}>
          Feeling a little bit of both!
        </button>
      </div>




     
     
      {(question > 1 && physical) && <span><PhysicalPage /></span>}
      {(question > 1 && mental) && <span><MentalPage /></span>}
      {(question > 1 && mix) && <span><MixPage /></span>}




    </div>
  )
}


// function UserInput() {
//     const userStreak = firestore.collection('streak');


// }




export default SurveyPage

