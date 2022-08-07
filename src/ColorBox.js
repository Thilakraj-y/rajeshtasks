import React from 'react'
import "./ColorBox.css"
import ManImage from './ManImage'


function ColorBox() {
  return (
    <div>
        <div className='colorboxbody'>
                <div className='textcolorbox'>
                    <h2>Our Success</h2>
                    <h6>View our portfolio in catagoris</h6>
                </div>


            <div class="grid text-center boxes">
                <div class="g-col-5 colorsno">
                    <div  className='boxes003' style={{backgroundColor:'#8479EC'}}>137</div>
                </div>
                <div class="g-col-5 colorsno">
                    <div  className='boxes003' style={{backgroundColor:'#EC79B5'}}>47</div>
                </div>
                <div class="g-col-5 colorsno">
                    <div className='boxes003' style={{backgroundColor:'#FBA13C'}}>34</div>
                </div>
            </div>
        </div>

        <ManImage/>
    </div>
  )
}

export default ColorBox