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
                <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="https://uceafaa96ecb7e62baa10d3c0530.previews.dropboxusercontent.com/p/thumb/AB2Oj7ojQDB9QIh__h7l_h6v6AhmF15zvXidTm9aobWpuSYmltc1qK72TglNss5MQrze5dxl05JnqmReJRIDgEKMOEbm1ZvtcJk0Ijb_BTOoI_oqS5P_1zWle4Bx7m8-l8B9un_Rn5pU4iXryBpbfpEVMi_eI4SK0wzErD2B6Kv0rljB0KeoI50hAM778Sug2HuHlLOiQl6aPFRRhdOqoDtOM99iwsGYqNOuOmeS-_zqGaF4c1s1ITct_4xZVArLAWndrHbu0NXEGmWjWCceMlXoXER6MqbBtiLIDtMC3jNiKt2ulaeFZwA7awllxjLCeCOOGYvY1lH00pLbacLnU5k88R7iirCtjarJK4Ihs6RCXE90GLidY35zX0n_wygbGzcv2skwDpk_RhsnFAK2MKl4vj6gGGNT2IlPKf86i2In_HukdID3lhO9eur8OBZGULN2Sb-7hxdIcKrk67mpuV9xbfocj4UGw6pf8ITXvbJhkcT_K21sw_kWFIkaDLe048M/p.jpeg" 
                         alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src="https://uced554194476ecfe55f7a89c4f3.previews.dropboxusercontent.com/p/thumb/AB3V3dXb8PJSNNkKOZIESyfEUTOqbp9qKhUejESFBpRVs13C5zTbh4D4MWYvO27Uu9ngSFu4milZGBXujaOrK89lvhVDRgBcxZkPErsZehLK1C1Ngi8LHVtt9yL1FkkQl4lJlpSo6ypsQHP8_AcsBoHJf8s5Wdhmve_2ACOZhHbPE4opUmDUy1xUQLa9fOAVj8igg7NWrH5gzY3dSDrBDQiDczkzwJCrK3ade_TozPf--O0IRk2GgHPNicrUSUKacSEOVCTi7nslhwcKt93kXOPrPp93fziF_EkeJOD-eGtRpSSbJiE3yZ6GceTYoFvIpBLDEirKUTwgaEK3FAZ4QO_Ay0g-kwTJn2vw3H_-ZrvBVo61KZB6-IheP5DoaMbPXJYY73s7zDA25vtiqJtIob2vS8q-WMboAdKXJcsKjMxZUAtE0NRbFV47QeNZvako1YJ6RIJ3Ai4TTweM_zv0DDV-lFr6s9S8Dd5kDQFIfP3uI04kPGgR2SF4J8Y8Cde0TLw/p.jpeg" 
                         alt="Image two" />}
                         position={30}
                         style={{width:"100%"}}
                    />
                    <p>Starting at <b>$ 0.30</b> per image</p>
                </div>
            </div>


         
        <div className='picture' id='PhotoRetouching ' >
         <div className='clippingpath3'>
                    <ReactCompareSlider
                        itemOne={<ReactCompareSliderImage src="https://uceafaa96ecb7e62baa10d3c0530.previews.dropboxusercontent.com/p/thumb/AB2Oj7ojQDB9QIh__h7l_h6v6AhmF15zvXidTm9aobWpuSYmltc1qK72TglNss5MQrze5dxl05JnqmReJRIDgEKMOEbm1ZvtcJk0Ijb_BTOoI_oqS5P_1zWle4Bx7m8-l8B9un_Rn5pU4iXryBpbfpEVMi_eI4SK0wzErD2B6Kv0rljB0KeoI50hAM778Sug2HuHlLOiQl6aPFRRhdOqoDtOM99iwsGYqNOuOmeS-_zqGaF4c1s1ITct_4xZVArLAWndrHbu0NXEGmWjWCceMlXoXER6MqbBtiLIDtMC3jNiKt2ulaeFZwA7awllxjLCeCOOGYvY1lH00pLbacLnU5k88R7iirCtjarJK4Ihs6RCXE90GLidY35zX0n_wygbGzcv2skwDpk_RhsnFAK2MKl4vj6gGGNT2IlPKf86i2In_HukdID3lhO9eur8OBZGULN2Sb-7hxdIcKrk67mpuV9xbfocj4UGw6pf8ITXvbJhkcT_K21sw_kWFIkaDLe048M/p.jpeg" 
                         alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src="https://uced554194476ecfe55f7a89c4f3.previews.dropboxusercontent.com/p/thumb/AB3V3dXb8PJSNNkKOZIESyfEUTOqbp9qKhUejESFBpRVs13C5zTbh4D4MWYvO27Uu9ngSFu4milZGBXujaOrK89lvhVDRgBcxZkPErsZehLK1C1Ngi8LHVtt9yL1FkkQl4lJlpSo6ypsQHP8_AcsBoHJf8s5Wdhmve_2ACOZhHbPE4opUmDUy1xUQLa9fOAVj8igg7NWrH5gzY3dSDrBDQiDczkzwJCrK3ade_TozPf--O0IRk2GgHPNicrUSUKacSEOVCTi7nslhwcKt93kXOPrPp93fziF_EkeJOD-eGtRpSSbJiE3yZ6GceTYoFvIpBLDEirKUTwgaEK3FAZ4QO_Ay0g-kwTJn2vw3H_-ZrvBVo61KZB6-IheP5DoaMbPXJYY73s7zDA25vtiqJtIob2vS8q-WMboAdKXJcsKjMxZUAtE0NRbFV47QeNZvako1YJ6RIJ3Ai4TTweM_zv0DDV-lFr6s9S8Dd5kDQFIfP3uI04kPGgR2SF4J8Y8Cde0TLw/p.jpeg" 
                         alt="Image two" />}
                         position={80}
                         style={{width:"100%"}}
                    />

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
                        itemOne={<ReactCompareSliderImage src="https://uc913d2ef1667048a0ed7ba85cd6.previews.dropboxusercontent.com/p/thumb/AB3PdSia_NHEsc5QfIReH9ipDLrtTx5OZb2MGCDpS4fsZSxSPtZd17XBqY8fAMtsIUoXkfVACDTbJZwPS2B2g_r5j9-Hw7XAuA_JQaqRGhOYnKyRJ0shZa5uiRPJzTwGY2q7A01PPjIhh3GYWXrYAnNVY3FheUHBWO3L2naPLzYj9f6ncUNnPVe6rUIhbXet-zPuUCq-3RLdknTxkC8xZLkpmU0WFvtcC-BZengPWgdGUbPEBuzejXNFosu5V7QfEvbtmrS03NNINLQe_o0Uv_EsYTQTYyPcbpDP9_plt5-0Nf1wZwTWVNTIYNo0wZlNTLNFz7slBmNkfgzeaYuOT41_1eZOc83wK0yliaOhLXjZPSpxpP8wvpLmhxm67CeFCd7XlnLg5wm868YMuaUdFBNzp6N8UJTPjI1pQJX6o7hK1oJrUIJW5ysZIic2Pd6RBrByoLYOF2_g4XbGRFVnsAdCgKwJP8P_C0dYxzBxEWC8HYXXqL7NCJz2lHjAFld-2bWQ8ui2BtvKwsJ0vIQ_x9XIufR7967ZVp9BFORzrMOF1NgNJWi9IBvMRDLZ2u6_jhs/p.jpeg" 
                         alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src="https://uc37a1a2325dbb5d64826d810eb6.previews.dropboxusercontent.com/p/thumb/AB2JlDPN1nOzRz65O1ulBrnoJEPQTInJhIi7ZYNp53xtXI-lrjQ0EIePBXYMHBTQjgb0s4uakHh_PVOpiuQn_PpNrBfx7M53Shnq4ELOOIs0UDqt7PgyVOUcNM1uY7TWYNgN3ig1KNOA6hsDEwAwhinAk6wc2dIsco3GJDxGrHw5YZx78kRva-lg9aoThGAsrXh2n4bkI3uvu2sAoK_lcoz-klFkunGKqCAo-ELSyDEPzrrP6I3aXiYSGq9dc2scXAXEdcsINJXMIbfVGB_hq633T3rd20VRy5RktFrSFST0feHX5dHq2BEViXIZuIkQvz4hhDimNBNnDReJa1Dm-fkMkuene2ZjLhj_PM7Et4hVKxbHcI0Cu2AamZQcPPHb1EqGd7wlpEtNj95sK7QPR7P91gfeEJ1h4xredGtwFAyldnDwrjOz_QNFZeWF7ukujNL3jqOxO_l6LGZoFIlQlx2L5XiX2Hu3W8MPIMzB7j9eYozO2oz7CgXO5W4DPUGPnoE/p.jpeg" 
                         alt="Image two" />}
                         position={20}
                         style={{width:"100%"}}
                    />
                    <p>Starting at <b>$ 0.25</b> per image</p>
                </div>
            </div>


         
        <div className='picture' id='ShadowCreation'>
         <div className='clippingpath3'>
         <img 
                    className='shoeimg1'
                    src="https://uc2014fd32804a0d4154d05f3d33.previews.dropboxusercontent.com/p/thumb/AB2NmfPqdBrbXaTbir6HeV7uJzlgBVJ9IFDGBpbY-El96ees45M3hLKKm1xvLdSL7_nTR8e9e-ooeI0m8L68yXX1CL_aQlGg9LgWKcbLwDdD0w3kwgkTJGWyoYBaeKunDDi7Ph_sDES9pVfdKfikLj2o0acimoEFWZNXS9sTma2Lnf8d5Rfzv1KD8H1RzmhMJhUiu5bghuQ40B9CPqqHgg88QEzOQvY9ESh2lZ2V3NJtB49suwvIl3HaWUiUAyAd3Kq2_Mb2X4RMDR4bvbp0nad-GhsV7ZFZTiP5UATiWqAat9ijegjMqnenqeCityC6Pc9f55oq3ZGUoSvfB7sUVlyA3zIlDHPnJ7Dtq4y8htYgiqGgt9K17UJx3fYb6DADIT0/p.jpeg?size=512x512&size_mode=1"/>
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
                    src="https://uca4f5206966c20c7136b88dcd75.previews.dropboxusercontent.com/p/thumb/AB3RFO8uIwoONScWQcF2Q4c8FAVkdBO4bQ8DInVfXzuo-0jfmvqOyh6COMl_GMeHh0y43Ip_dBbyZ-paMu1qlIhnyx4rmvQaQxf85vC7nmz0eQIdsBgMQuV2ElW0CGOVEi4Bh-IWx_2UOK98C2zjYJAJ6ipyX3VvVNvGpkXVZ6nZ8yISR1varN20IVethCtVUUc3Yh6gsjA1w8-l3Lj-Uf_UazlmgDtGPQkZjNT7FxJyXfQLlwnV8ZCOUA7KOwGP5Lss0dUpaXoh9YZRQWH4iui-9-BYe94SHfj2r05xk13oLiyfcVO4RhV7Ugo8P8LaLc9W9HokfxG9H0WOisaJJAHceQrQJy_OZ0Lz_1odiBQRi0wF1rKSLrfV9DxLLxMP1Ts/p.jpeg"/>

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