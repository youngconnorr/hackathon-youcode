// import React from 'react'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './SurveyPage.css'
import 'firebase/compat/firestore';
// import { useCollectionData } from 'react-firebase-hooks/firestore'


// const firestore = firebase.firestore();


const PhysicalPage = () => {




 
    return (


        <div>
            <h1>Lets get moving!</h1>
            <div><h2>Question 2</h2></div>
            <div>
                <p>How intense of training are you looking for?</p>
                <button>Just getting moving</button>
                    <button>Losing weight</button>
                    <button >Toning abs</button>
                    <button >Building upper body muscle</button>
                    <button >Building lower body muscle</button>
                    <button >Flexibility</button>
            </div>
        </div>
    )
  }
 
  export default PhysicalPage

