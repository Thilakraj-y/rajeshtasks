import React from 'react';
import './Uiexpert.css';
import image08 from "./imags/undrawimageuiexpert.png"
import ImageComponent from './ImageComponent';

function AboutUiExpert() {
  return (
    <>
    <div className='expertbody'>
         <div className='content1'>
           <img src={image08} className="image08" alt=""></img>
         </div>
         <div className='content2'>
          <b>Know About ui Expert</b>
          <h6>I always follow professional Workflow and provide you best <br></br>
            service with resealable costs.</h6>
         </div>

    </div>
    <ImageComponent/>

    </>
  )
}

export default AboutUiExpert