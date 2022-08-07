import React from 'react'
import "./ManImage.css"
import image17 from './imags/image17.png'
import image41 from './imags/waving-hand.png'
import ThreeBox from './ThreeBox'


function ManImage() {
  return (
    <>
    <div className='imagemanbody'>
        <div className='contentallbox12'>
                <h2 style={{color:'white'}}>What they say about us!</h2>
                    
                <h6 style={{color:'#E3CDFE '}}>ustomer Review Sites for Collecting Business & Product Reviews</h6>
                <div style={{width:'200px',height:'300px',marginLeft:'500px',marginTop:'100px'}}>
                  <img src={image17} alt=""></img>
                </div>
               
                <h6 className='imagebottom'>Loved the design specially the color combination. Look forward to 
                <br></br>
                <br></br>
                work more in future.
                <br></br>
                <br></br>
                <b style={{color:'#4239EF'}}>Cris Angela</b>
                <br></br>
                <br></br>
                Head Of CsWeb</h6>
        </div>



        <br></br>
        <hr className='hrtags'></hr>

        <div className='butontext'>
            <div style={{width:'50%',marginTop:'100px'}}>
                    <h6>
                    Learn About My Workflow:
                    </h6>
                    <h2>I'm always hungry for creativity.<br></br>Available for hire</h2>


            </div>
            <div style={{width:'20%',marginTop:'100px'}}>
                <button className='btnlast'><img src={image41} alt=""></img>  Wave Me</button>

            </div>
        </div>

    </div>
    <ThreeBox/>

    </>
  )
}

export default ManImage