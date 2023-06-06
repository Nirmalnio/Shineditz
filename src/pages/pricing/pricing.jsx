import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Head/Header"
import './pricing.css';
import bag from "../../Assets/Images/bag.jpg";
import schoolbag from "../../Assets/Images/schoolbag.jpg";
import earings from "../../Assets/Images/earrings.jpg";
import {BiRupee} from "react-icons/bi";  
import Footer from "../../Components/Footer/Footer";
import { handicon,Quick,data,Assured,iso,prices,clippingpath,masking,retouching,colorcorrection,showcorrection,Ghostmasking } from '../../Assets/icon';

function Pricing() {


    const [price,setprice] = useState("Clipping Services")

    const pricings = [
        {id:1,
         image:clippingpath,
         name:"Clipping Services" ,
         basic: 0.30,
         medium: 1.50,
         complex: 3.50
        },
        {id:2,
         image:masking,
         name:"Image Masking",
         basic: 0.60,
         medium: 1.50,
         complex: 3.50 
        },
        {id:3,
         image:retouching,
         name:"Photo Retouching",
         basic: 0.60,
         medium: 2.50,
         complex: 5.00 
        },
        {id:4,
         image:colorcorrection,
         name:"Color Correction",
         basic: 0.25,
         medium: 0.65,
         complex: 3.50 
        },
        {id:5,
         image:showcorrection,
         name:"Shadow Correction",
         basic: 0.20,
         medium: 0.50,
         complex: 0.75 
        },
        {id:6,
         image:Ghostmasking,
         name:"Ghost Masking",
         basic: 0.65,
         medium: 1.00,
         complex: 1.50 
        },
        {id:7,
            image:Ghostmasking,
            name:"HDRphotoediting",
            basic: 0.40,
            medium: 0.65,
            complex: 1.00, 
        },
        {id:8,
            image:Ghostmasking,
            name:"Flash/Ambient Editing",
            basic: 0.35,
            medium: 0.50,
            complex:0.60, 
        },
        {id:9,
            image:Ghostmasking,
            name:"Panorama Stitching",
            basic: 3.0,
            medium: 5.0,
            complex: 15.00, 
        },
        {id:10,
            image:Ghostmasking,
            name:"Aerial Editing",
            basic: 0.40,
            medium: 0.65,
            complex: 1.00, 
        },
        {id:11,
            image:Ghostmasking,
            name:"Sky,Lawn and Pool Replacement",
            basic: 0.30,
            medium: 0.40,
            complex: 0.25, 
        },
        {id:12,
            image:Ghostmasking,
            name:"Pro Image Enhancements",
            basic: 1.0,
            medium: 3.0,
            complex: 1.5, 
        },
        {id:13,
            image:Ghostmasking,
            name:"Weather Removal /Day to Dusk",
            basic: 1.00,
            medium: 0.65,
            complex: 1.00, 
        },
        // {id:14,
        //     image:Ghostmasking,
        //     name:"Re video Editing",
        //     basic: 0.4,
        //     medium: 0.65,
        //     complex: 1.00, 
        // },
     ]

    // const Option = pricing.filter(item=>item?.name===price)
     

    return (
        <div>
            <Header />
            <div className="containerdiv my-3">
                <div className="headdiv">
                    <h1>Find the plan that fits you</h1>
                    <p>We have plans to match your needs for turnaround time, retouching features, and price point</p>
                </div>
                <div className="cardsec">
                    <div>
                        <button onClick={()=>setprice("Clipping Services")}
                        className={price==="Clipping Services"?"buttoncardsactive":"buttoncards"}
                        >Clipping path</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Image Masking")}
                        className={price==="Image Masking"?"buttoncardsactive":"buttoncards"}
                        >Image Masking</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Photo Retouching")}
                        className={price==="Photo Retouching"?"buttoncardsactive":"buttoncards"}
                        >Photo Retouching</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Color Correction")}
                        className={price==="Color Correction"?"buttoncardsactive":"buttoncards"}
                        >Color Correction</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Shadow Correction")}
                        className={price==="Shadow Correction"?"buttoncardsactive":"buttoncards"}
                        >Shadow Correction</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Ghost Masking")}
                        className={price==="Ghost Masking"?"buttoncardsactive":"buttoncards"}
                        >Ghost Mannequin</button>
                    </div>
                </div>
                <div className="flexbox">
                    <div>
                        <p className="gridtitle">Basic Image</p>
                        <p><span className="basic">$ {Option[0]?.basic}</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={bag}></img>
                    </div>
                    <div>
                        <p className="gridtitle">Medium Image</p>
                        <p><span className="basic">$ {Option[0]?.medium}</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={schoolbag}></img>
                    </div>
                    <div>
                        <p className="gridtitle">Complex Image</p>
                        <p><span className="basic">$ {Option[0]?.complex}</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={earings}></img>
                    </div>

                </div>
                <div className="submitbutton" >
                    <div> <button className='button3' type="submit">View Samples</button></div>
                    <div> <button className='button1' type="submit">Contact US</button></div>
                </div>

                <div className="cardsec">
                    <div>
                        <button onClick={()=>setprice("Clipping Services")}
                        className={price==="Clipping Services"?"buttoncardsactive":"buttoncards"}
                        >HDR Photo Editing</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Image Masking")}
                        className={price==="Image Masking"?"buttoncardsactive":"buttoncards"}
                        >Flash Ambient</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Photo Retouching")}
                        className={price==="Photo Retouching"?"buttoncardsactive":"buttoncards"}
                        >Panoroma stitching</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Color Correction")}
                        className={price==="Color Correction"?"buttoncardsactive":"buttoncards"}
                        >Sky,Lawn,Pool</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Shadow Correction")}
                        className={price==="Shadow Correction"?"buttoncardsactive":"buttoncards"}
                        >Pro image</button>
                    </div>
                    <div>
                        <button onClick={()=>setprice("Ghost Masking")}
                        className={price==="Ghost Masking"?"buttoncardsactive":"buttoncards"}
                        >Weather Removal</button>
                    </div>
                </div>
                <div className="flexbox">
                    <div>
                        <p className="gridtitle">Basic Image</p>
                        <p><span className="basic">$ {Option[0]?.basic}</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={bag}></img>
                    </div>
                    <div>
                        <p className="gridtitle">Medium Image</p>
                        <p><span className="basic">$ {Option[0]?.medium}</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={schoolbag}></img>
                    </div>
                    <div>
                        <p className="gridtitle">Complex Image</p>
                        <p><span className="basic">$ {Option[0]?.complex}</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={earings}></img>
                    </div>

                </div>
                <div className="submitbutton" >
                    <div> <button className='button3' type="submit">View Samples</button></div>
                    <div> <button className='button1' type="submit">Contact US</button></div>
                </div>

            {/* {pricings?.map((items,id)=>{
                return(
                            <div className="pricecardDiv" key={id}>

                            <div className="pricingcard1">
                                <div className="iconimg">
                                    <div>{items?.image}</div>
                                </div>
                                <b className="pricingheading">{items?.name}</b>
                            </div>

                            <div className="pricingdivsec">
                                <div className="pricingsection">
                                        <b>Basic image</b>
                                        <span><b>${items?.basic.toFixed(2)}</b>/image</span>
                                </div>
                                <div className="pricingsection">
                                        <b>Medium image</b>
                                        <span><b>${items?.medium.toFixed(2)}</b>/image</span>
                                </div>
                                <div className="pricingsection" style={{border:"none"}}>
                                        <b>Complex image</b>
                                        <span><b>${items?.complex.toFixed(2)}</b> /image</span>                              </div>

                            </div>

                            <div>
                                <Link className="pricingbtn" to="/samples">View Sample</Link>
                            </div>

                            </div>
                )
            })
                

            } */}

            </div>
          
            <Footer/>
        </div>

    )

}

export default Pricing;