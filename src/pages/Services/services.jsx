import { React, useState } from 'react'
import "./services.css"
import Header from '../../Components/Head/Header'
import shoe1 from "../../Assets/Images/Banner 2.jpg"
function Services(){
    return(
        <div className='full'>
         <Header />
         <div className='container'>
            <div className='clippingpath'>
                <div className='clippingpath1'>
                    <h3>Clipping path</h3>
                    <p>Outsource your clipping path needs for your product photos to achieve sharp and immaculate 
                      results on any background, freeing yourself from the burden of meticulous photo editing.</p><br />
                      <button className='view'>view samples </button>
                </div>
                <div className='clippingpath2'>
                    <img 
                    className='shoeimg'
                    src={shoe1}/><br /><br/>

                    <p>Starting at<span>$0.30</span>per image</p>


                </div>

            </div>
         </div>
         <div className='container'>
            <div className='picture'>
         <div className='clippingpath3'>
                    <img 
                    className='shoeimg'
                    src={shoe1}/><br /><br/>

                    <p>Starting at<span>$0.30</span>per image</p>
                </div>
                <div className='clippingpath4'>
                    <h3>Picture perfect Clipping path</h3>
                    <p>With meticulous hand-drawn clipping paths and a keen eye for detail, we guarantee flawless 
                        image cut-outs and crisp photo edges that will enhance 
                        the visual appeal of your products, thereby driving more conversions.</p><br />
                      <button className='samples'>contact us </button>
                      
                </div>
                </div>
         </div>
         <br/><br/>

         <div className='price'><h2>Price that match your needs</h2></div>

         <div className='price1'>
            <div className='basic'>
            <div className='basic1'>Basic image</div>
            <div className='basic2'>Medium image</div>
            <div className='basic3'> Complex Iage</div></div>
            <br/><br/>
            <div className='perimage'>
            <div className='perimage1'>
                <p><b>$0.30</b></p>
                <p>per image</p><br/>
                <img 
                    className='shoeimg1'
                    src={shoe1}></img>

            </div>
            <div className='perimage2'>
            <p><b>$0.30</b></p>
                <p>per image</p><br/>
                <img 
                    className='shoeimg2'
                    src={shoe1}></img>
            </div>
            <div className='perimage3'>
            <p><b>$0.30</b></p>
                <p>per image</p><br/>
                <img 
                    className='shoeimg3'
                    src={shoe1}></img>
            </div></div>

         </div><br/>
         <button className='lets'>Let's talk</button><br/>
         <div className='see'>
            <h2>See Our User-Loved Samples Images</h2>
         </div><br/><br/>
         <div className='loved'>
            <div className='loved1'>
                <div className='img1'><img 
                    className='shoeimg7'
                    src={shoe1}></img></div>
                <div className='img2'>
                <img 
                    className='shoeimg8'
                    src={shoe1}></img>
                </div>
                <div className='img2'>
                <img 
                    className='shoeimg9'
                    src={shoe1}></img>
                </div>

            </div>
            <div className='loved2'>
            <div className='img4'>
            <img 
                    className='shoeimg10'
                    src={shoe1}></img>
            </div>
            <div className='img5'>
            <img 
                    className='shoeimg11'
                    src={shoe1}></img>
            </div>
            <div className='img6'>
            <img 
                    className='shoeimg12'
                    src={shoe1}></img>
            </div>
            </div>

         </div><br/><br/>
         <div className='view'>
            <a>viewmore</a>
         </div><br/>

         <div className='offer'>
            <div className='ghost'>
                <div className='ghost1'><h2>Checkout other services we offer</h2></div>
                <div className='ghost2'>
                    <div className='mannique'><h5>Ghost Mannequin</h5></div><br/>
                    <div className='pic'><img 
                    className='mann'
                    src={shoe1}></img></div>
                    
                </div>
                <div className='ghost3'>
                <div className='mannique'><h5>Ghost Mannequin</h5></div><br/>
                <div className='pic'> <img 
                    className='mann'
                    src={shoe1}></img></div>
                </div>
            </div>
            <div className='masking'>
                <div className='masking1'> <div className='mannique'><h5>Ghost Mannequin</h5></div><br/>
                <div className='pic'> <img className='mann' src={shoe1}></img></div></div>
                <div className='masking2'>
                <div className='mannique'><h5>Ghost Mannequin</h5></div><br/>
                <div className='pic'><img className='mann'src={shoe1}></img></div>
                </div>
                <div className='masking3'>
                <div className='mannique'><h5>Ghost Mannequin</h5></div><br/>
                <div className='pic'><img 
                    className='mann'
                    src={shoe1}></img></div>
                </div>
            </div>

         </div>

        </div>
    )
}
export default Services 