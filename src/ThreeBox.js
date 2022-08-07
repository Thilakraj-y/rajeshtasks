import React from 'react'
import './ThreeBox.css'
import image21 from './imags/image21.png'
import image22 from './imags/image22.png'
import image23 from './imags/image23.png'
import BeforeComponent from './BeforeComponent'


function ThreeBox() {
  return (
    <>
    <div>
            <div className='threeBox01'>
                    <div class="container text-center allbox">
                    <div class="row">
                        <div class="col newmodal" style={{backgroundColor:'#211C87',color:'white'}}>
                        <img src={image21} alt=""></img>
                        <br></br>
                        <br></br>
                        <h2 className='sizetext01'>Design</h2>
                        <h6 className='sizetext02'>Lorm Spam Door<br></br>Somith Door</h6>
                            <br></br>
                        </div>
                        <div class="col newmodal" style={{backgroundColor:'#FCB336 ',color:'white'}}>
                        <img src={image22} alt=""></img>
                        <br></br>
                        <br></br>
                        <h2 className='sizetext01'>Sketch</h2>
                        <h6 className='sizetext02'>Lorm Spam Door<br></br>Somith Door</h6>
                        </div>
                        <div class="col newmodal" style={{backgroundColor:'#E8CEF8',color:'white'}}>
                        <img src={image23} alt=""></img>
                        <br></br>
                        <br></br>
                        <h2 className='sizetext01'>Testing</h2>
                        <h6 className='sizetext02'>Lorm Spam Door<br></br>Somith Door</h6>
                        </div>
                    </div>
                    </div>
            </div>

    </div>

    <BeforeComponent/>

    </>
  )
}

export default ThreeBox