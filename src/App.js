import React from 'react'
import  image1  from "./imags/Home.png"
import "./App.css"
import OurServices from './OurServices'
import image41 from './imags/waving-hand.png'



function App() {
  return (
    <div>
    <div className='totalbody'>
        <div className='header'>

          <div className='menubar1'>
            <h5><b className='bbbb'>Web</b> Ui Expert</h5>
          </div>

            <div className='menubar'>
              <p>home</p>
              <p>portpolio</p>
              <p>about</p>
              <p>blog</p>
              <button className='btn'>Log In</button>
            </div>
        </div>

      <div className='imageboxtext'>
        <div className='textcontent' style={{width:'50%',height:'40%'}}>
          <div>
          <h1>Provide Your Best</h1>
          <h1>Best Ui Service</h1>
          <h6>Mobile App Design and Development Studio. You can hire us</h6>

          <button className='btns'><img src={image41} alt=""></img>  Wave Me</button>
          </div>
        </div>
            <div style={{width:'50%',height:'40%'}}>
                  <img src={image1} className="image1" alt=""></img>
            </div>
      </div>
    </div>
<br></br>

    <OurServices/>

    </div>
  )
}

export default App