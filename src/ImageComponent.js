import React from 'react'
import './ImageComponent.css'
import image09 from "./imags/ourcolimage01.png"
import image10 from "./imags/cropimage10.png"
import image11 from "./imags/image11.png"
import image12 from "./imags/image12.png"
import image13 from "./imags/image13.png"
import image14 from "./imags/image14.png"
import ColorBox from './ColorBox'


function ImageComponent() {
  return (
    <>
    <div className='imagebody'>

        <div className='imagecontainer'>
            <div className='imagecontainerbox1'>
                   <div className='textcontent001'>
                        <h2>Our Portfolio</h2>
                        <h6 className='h6padding'>View our portfolio in catagoris</h6>

                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                        <h6 className='h6padding'>All Works</h6>
                        <h6 className='h6padding'>Minimal Design</h6>
                        <h6 className='h6padding'>Colorful Design</h6>
                        <h6 className='h6padding'>Landing Page Design</h6>
                        <h6 className='h6padding'>Mobile App Design</h6>
                   </div>

            </div>
            <div className='imagecontainerbox2'>
                <div class="container text-center" className='allboximagestext'>
                    <div class="row">
                        <div class="col-4 newcol">
                        <img src={image09} className="image09 " alt=""></img>
                        </div>
                        <div class="col-4 newcol">
                        <img src={image10} className="image10 " alt=""></img>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 newcol">
                        <img src={image11} className="image09 " alt=""></img>

                        </div>
                        <div class="col-4 newcol">
                        <img src={image12} className="image09 " alt=""></img>

                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4 newcol">
                        <img src={image13} className="image09 " alt=""></img>

                        </div>
                        <div class="col-4 newcol">
                        <img src={image14} className="image09 " alt=""></img>
                        </div>
                    </div>

                </div>

            </div>







        </div>

    </div>
    <ColorBox/>

    </>
  )
}

export default ImageComponent