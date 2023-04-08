import { React, useState,useEffect,useRef,createRef } from 'react'
import "./services.css"
import Header from '../../Components/Head/Header'
import shoe1 from "../../Assets/Images/Banner 2.jpg"
import Footer from '../../Components/Footer/Footer'
import { linkshare } from '../../Assets/icon'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

function Services(){

    const myDivRef = createRef();

    useEffect(() => {
        if (window.location.hash) {
          const targetId = window.location.hash.slice(1);
          const targetDiv = myDivRef.current.querySelector(`#${targetId}`);
          console.log(targetDiv,"TARGETID");

          if (targetDiv) {
            targetDiv.scrollIntoView();
            const element = document.getElementById(`${targetId}`);
            const y = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({top:y,behavior:"smooth"})
          }
        }
      }, []);

    return(
        <div >
         <Header />
         <div className='full' ref={myDivRef}>
            <div className='clippingpath' id='ClippingPath' >
                <div className='clippingpath1'>
                    <h3 >Clipping path</h3>
                    <p>Outsource your clipping path needs for your product photos to achieve sharp and immaculate 
                      results on any background, freeing yourself from the burden of meticulous photo editing.</p><br />
                      <button className='viewsbtn'>view samples</button>
                </div>
                <div className='clippingpath2'>
                    <img 
                    className='shoeimg'
                    src={shoe1}/>
                    <p>Starting at <b>$ 0.30</b> per image</p>
                </div>
            </div>


         
        <div className='picture' id='PhotoRetouching ' >
         <div className='clippingpath3'>
                    <img 
                    className='shoeimg1'
                    src={shoe1}/>

                    <p>Starting at<b> $ 0.60</b> per image</p>
                </div>
                <div className='clippingpath4'>
                    <h3>Photo retouching Services</h3>
                    <p>involve the process of editing, enhancing, and manipulating digital photographs using various software 
                        tools to make them look more polished, professional, and visually appealing.</p><br />
                      <button className='viewsbtn'>view Samples</button>
                      
                </div>
            </div>

        
            <div className='clippingpath' id='Color_Correction_Services' >
                <div className='clippingpath1'>
                    <h3 >Color Correction Services</h3>
                    <p>a type of photo editing service that involves adjusting the colors in a digital image to achieve a more accurate and visually pleasing result. This service is used to correct issues related to color temperature, saturation, hue, contrast, and brightness.</p><br />
                      <button className='viewsbtn'>view samples</button>
                </div>
                <div className='clippingpath2'>
                    
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="https://uc913d2ef1667048a0ed7ba85cd6.previews.dropboxusercontent.com/p/thumb/AB3tVAEUNhO5gW5Z4GYun2d4s4qDH06R2EIlpRPhkkBaB_hw0t2KaC96YsniDYYSwG6cbZ9XEuc_X5Xqdt3KVFg_4D5VpZ6rhN8hzLWE_0gEw_wHYrBDVV5lb_j38h6I5IgSfMRdo6zUKlhbi1NyC11zQDq1gZzAZ7zrWE7yQ7WGGWEwR5ksjqBz7aTFIfZ2J433KvHt2YUwMJmDmf47t22oKU01Px0jX0RkSmU2xqZrGirdRsViPSCMr_MrNXhO65ec5j4SrkUuP_60k7i5l7c8ateSSD1QMOgY0FG_V_YDATlcb3DVuYkTWpXtwaQ0qYm0eYqUxEBVHuOX-7iccRc_7mkBi2gezD1TY2wmB8fJXFwr2Tq4E7Qs3pNqjmLCbwvBDJ_SubMmj-Nwf5In8DNAMbtIgehI6LYI7AbiKFpp60kbavuNL6-KEJcNdz5QE0sD2sNSSukJRq-vQ1GbNhlFW_SsmrsjouvO32E45U_OHa-qlRHmMTZ7aGCY3RoreWhSZQdV9Vq68qwqeHkm4vmGMOyArBLFAfahTdR1ND82noyLN-5HWf5Zlufly9TMYT0/p.jpeg?size=512x512&size_mode=1" 
                         alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src="https://uc37a1a2325dbb5d64826d810eb6.previews.dropboxusercontent.com/p/thumb/AB2JlDPN1nOzRz65O1ulBrnoJEPQTInJhIi7ZYNp53xtXI-lrjQ0EIePBXYMHBTQjgb0s4uakHh_PVOpiuQn_PpNrBfx7M53Shnq4ELOOIs0UDqt7PgyVOUcNM1uY7TWYNgN3ig1KNOA6hsDEwAwhinAk6wc2dIsco3GJDxGrHw5YZx78kRva-lg9aoThGAsrXh2n4bkI3uvu2sAoK_lcoz-klFkunGKqCAo-ELSyDEPzrrP6I3aXiYSGq9dc2scXAXEdcsINJXMIbfVGB_hq633T3rd20VRy5RktFrSFST0feHX5dHq2BEViXIZuIkQvz4hhDimNBNnDReJa1Dm-fkMkuene2ZjLhj_PM7Et4hVKxbHcI0Cu2AamZQcPPHb1EqGd7wlpEtNj95sK7QPR7P91gfeEJ1h4xredGtwFAyldnDwrjOz_QNFZeWF7ukujNL3jqOxO_l6LGZoFIlQlx2L5XiX2Hu3W8MPIMzB7j9eYozO2oz7CgXO5W4DPUGPnoE/p.jpeg" 
                         alt="Image two" />}
                         position={30}
                         style={{width:"100%"}}
                    />
                    <p>Starting at <b>$ 0.25</b> per image</p>
                </div>
            </div>


         
        <div className='picture' id='ShadowCreation'>
         <div className='clippingpath3'>
                    <img 
                    className='shoeimg1'
                    src={shoe1}/>

                    <p>Starting at<b> $ 0.20</b> per image</p>
                </div>
                <div className='clippingpath4'>
                    <h3>Shadow Creation</h3>
                    <p> a photo editing service that involves adding a shadow effect to a product or object in a digital image to create a sense of depth, dimension, and realism. This service is commonly used in e-commerce, product photography,
                         and advertising to make products look more attractive and professional.</p><br />
                      <button className='viewsbtn'>view Samples</button>
                      
                </div>
            </div>

            <div className='clippingpath' id='GhostMannequin' >
                <div className='clippingpath1'>
                    <h3>Ghost Mannequin services </h3>
                    <p>a type of photo editing service that is commonly used in e-commerce product photography. It involves editing an image of a product on a mannequin or model to remove the mannequin or model, leaving only the product visible. This technique creates the illusion that the product is floating in mid-air,
                         giving the viewer a clearer and more detailed view of the product.</p><br />
                      <button className='viewsbtn'>view samples</button>
                </div>
                <div className='clippingpath2'>
                    <img 
                    className='shoeimg'
                    alt='image'
                    src={'https://uc913d2ef1667048a0ed7ba85cd6.previews.dropboxusercontent.com/p/thumb/AB3tVAEUNhO5gW5Z4GYun2d4s4qDH06R2EIlpRPhkkBaB_hw0t2KaC96YsniDYYSwG6cbZ9XEuc_X5Xqdt3KVFg_4D5VpZ6rhN8hzLWE_0gEw_wHYrBDVV5lb_j38h6I5IgSfMRdo6zUKlhbi1NyC11zQDq1gZzAZ7zrWE7yQ7WGGWEwR5ksjqBz7aTFIfZ2J433KvHt2YUwMJmDmf47t22oKU01Px0jX0RkSmU2xqZrGirdRsViPSCMr_MrNXhO65ec5j4SrkUuP_60k7i5l7c8ateSSD1QMOgY0FG_V_YDATlcb3DVuYkTWpXtwaQ0qYm0eYqUxEBVHuOX-7iccRc_7mkBi2gezD1TY2wmB8fJXFwr2Tq4E7Qs3pNqjmLCbwvBDJ_SubMmj-Nwf5In8DNAMbtIgehI6LYI7AbiKFpp60kbavuNL6-KEJcNdz5QE0sD2sNSSukJRq-vQ1GbNhlFW_SsmrsjouvO32E45U_OHa-qlRHmMTZ7aGCY3RoreWhSZQdV9Vq68qwqeHkm4vmGMOyArBLFAfahTdR1ND82noyLN-5HWf5Zlufly9TMYT0/p.jpeg?size=512x512&size_mode=1'}/>
                    <p>Starting at <b>$ 0.65</b> per image</p>
                </div>
            </div>


         <section id='Imagemasking'>
        <div className='picture' >
         <div className='clippingpath3'>
                    <img 
                    className='shoeimg1'
                    src={shoe1}/>

                    <p>Starting at<b> $ 0.60</b> per image</p>
                </div>
                <div className='clippingpath4'>
                    <h3>Image Masking</h3>
                    <p>With meticulous hand-drawn clipping paths and a keen eye for detail, we guarantee flawless 
                        image cut-outs and crisp photo edges that will enhance 
                        the visual appeal of your products, thereby driving more conversions.</p><br />
                      <button className='viewsbtn'>view Samples</button>
                      
                </div>
            </div>
        </section>


{/* 
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
         </div><br/> */}

         {/* <div className='offer'>
            <div className='ghost'>
                <div className='ghost1'><h2>Checkout other services we offer</h2></div>
                <div className='ghost2'>
                    <div className='mannique'><h5>Ghost Mannequin</h5></div><br/>
                    <div>{linkshare}</div>

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

         </div> */}
         </div>

         <Footer/>

        </div>
    )
}
export default Services 