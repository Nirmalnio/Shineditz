import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Head/Header"
import './pricing.css';
import bag from "../../Assets/Images/bag.jpg";
import schoolbag from "../../Assets/Images/schoolbag.jpg";
import earings from "../../Assets/Images/earrings.jpg";
import {BiRupee} from "react-icons/bi";  
import Footer from "../../Components/Footer/Footer";

function Pricing() {


    const [price,setprice] = useState("Clipping Services")

    const pricing = [
        {id:1,
         name:"Clipping Services" ,
         basic: 0.30,
         medium: 1.50,
         complex: 3.50
        },
        {id:2,
         name:"Image Masking",
         basic: 0.60,
         medium: 1.50,
         complex: 3.50 
        },
        {id:3,
         name:"Photo Retouching",
         basic: 0.60,
         medium: 2.50,
         complex: 5.00 
        },
        {id:4,
         name:"Color Correction",
         basic: 0.25,
         medium: 0.65,
         complex: 3.50 
        },
        {id:5,
         name:"Shadow Correction",
         basic: 0.20,
         medium: 0.50,
         complex: 0.75 
        },
        {id:6,
         name:"Ghost Masking",
         basic: 0.65,
         medium: 1.00,
         complex: 1.50 
        },
     
     ]

    const Option = pricing.filter(item=>item?.name===price)
     

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
                        >photo retouching</button>
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
            </div>
            {/* <div>
                <h1 style={{ marginBottom: 100,marginTop:100 }} className="headdiv">Frequently Asked Questions</h1>
            </div> */}

            <Footer/>
        </div>
    )

}

export default Pricing;