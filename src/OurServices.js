import React from 'react'
import "./OurServices.css"
import image2 from './imags/websiteuiimage2.png'
import image3 from './imags/ReDesign-1.png'
import image4 from './imags/ApplicationUi12.png'
import image5 from './imags/Mobileappno5.png'
import image6 from './imags/webappimage06.png'
import image7 from './imags/webappimage07.png'
import AboutUiExpert from './AboutUiExpert'

function OurServices() {
  return (
    <div className='bodycontent'>
        <div className='textcontent1'>
            <h6 ><b className='topp'>OUR SERVICE</b> </h6>
            <h2>We Provide Best Quality Service</h2>
            <h6>Our commitment to quality ensures that your applications get the best UI design <br></br>
                possible. UI/UX design is more than just pixels and animations, but the entire application<br></br> 
                experience.
            </h6>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div>
        <div class="container text-center allbox">
            <div class="row">
                <div class="col" style={{backgroundColor:'orange'}}>
                <img src={image2} alt=""></img>
                <br></br>
                <br></br>
                <b className='sizetext'>Website Ui</b>
                <h6 className='sizetext'>Fast, Powerful & Most Secure Network <br></br>
                    Solutions for Smart Home & Businesses</h6>
                    <br></br>
                    <button className='no1btn' style={{backgroundColor:'white',borderRadius: "20px",border:'none'}}>Readmore</button>



                </div>
                <div class="col" style={{backgroundColor:'#50CAD7 '}}>
                <img src={image3} alt=""></img>
                <br></br>
                <br></br>
                <b className='sizetext'>ReDesign</b>
                <h6 className='sizetext'>Fast, Powerful & Most Secure Network <br></br>
                    Solutions for Smart Home & Businesses</h6>
                    <br></br>
                    <button className='no1btn' style={{backgroundColor:'#50CAD7 ',color:'white',borderRadius: "20px",borderColor:'white'}}>Readmore</button>

                </div>
                <div class="col" style={{backgroundColor:'#9A35D1 '}}>
                <img src={image4} alt=""></img>
                <br></br>
                <br></br>
                <b className='sizetext'>Web Elements</b>
                <h6 className='sizetext'>Fast, Powerful & Most Secure Network <br></br>
                    Solutions for Smart Home & Businesses</h6>
                    <br></br>
                    <button className='no1btn' style={{backgroundColor:'#9A35D1',borderRadius: "20px",borderColor:'white',color:'white'}}>Readmore</button>

                </div>
            </div>
            <div class="row">
                <div class="col" style={{backgroundColor:'#3892C5 '}}>
                <img src={image5} alt=""></img>
                <br></br>
                <br></br>
                <b className='sizetext'>Mobile App Ui</b>
                <h6 className='sizetext'>Fast, Powerful & Most Secure Network <br></br>
                    Solutions for Smart Home & Businesses</h6>
                    <br></br>
                    <button className='no1btn' style={{backgroundColor:'#3892C5',borderRadius: "20px",borderColor:'white',color:'white'}}>Readmore</button>

                </div>
                <div class="col" style={{backgroundColor:'#DCB2E7 '}}>
                <img src={image6} alt=""></img>
                <br></br>
                <br></br>
                <b className='sizetext'>Web App Ui</b>
                <h6 className='sizetext'>Fast, Powerful & Most Secure Network <br></br>
                    Solutions for Smart Home & Businesses</h6>
                    <br></br>
                    <button className='no1btn' style={{backgroundColor:'#DCB2E7',borderRadius: "20px",borderColor:'white',color:'white'}}>Readmore</button>

                </div>
                <div class="col" style={{backgroundColor:'#DD5D5D'}}>
                <img src={image7} alt=""></img>
                <br></br>
                <br></br>
                <b className='sizetext'>Website Ui</b>
                <h6 className='sizetext'>Fast, Powerful & Most Secure Network <br></br>
                    Solutions for Smart Home & Businesses</h6>
                    <br></br>
                    <button className='no1btn' style={{backgroundColor:'#DD5D5D',borderRadius: "20px",borderColor:'white',color:'white'}}>Readmore</button>

                </div>
            </div>
        </div>
        </div>
      <AboutUiExpert/>

    </div>
  )
}

export default OurServices