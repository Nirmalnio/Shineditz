import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Head/Header";
import './pricing.css';
import bag from "../../Assets/Images/bag.jpg";
import schoolbag from "../../Assets/Images/schoolbag.jpg";
import earings from "../../Assets/Images/earrings.jpg";
import {BiRupee} from "react-icons/bi";  




function Pricing() {



    return (
        <div>
            <Header />
            <div className="containerdiv">
                <div className="headdiv">
                    <h1>Find the plan that fits you</h1>
                    <p>We have plans to match your needs for turnaround time, retouching features, and price point</p>
                </div>
                <div className="cardsec">
                    <div>
                        <button className="buttoncardsactive">Clipping path</button>
                    </div>
                    <div>
                        <button className="buttoncards">Image Masking</button>
                    </div>
                    <div>
                        <button className="buttoncards">photo retouching</button>
                    </div>
                    <div>
                        <button className="buttoncards">Color Correction</button>
                    </div>
                    <div>
                        <button className="buttoncards">Shadow Correction</button>
                    </div>
                    <div>
                        <button className="buttoncards">Ghost Mannequin</button>
                    </div>
                </div>
                <div className="flexbox">
                    <div>
                        <p className="gridtitle">Basic Image</p>
                        <p><span className="basic"><BiRupee />0.30</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={bag}></img>
                    </div>
                    <div>
                        <p className="gridtitle">Medium Image</p>
                        <p><span className="basic"><BiRupee />1.50</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={schoolbag}></img>
                    </div>
                    <div>
                        <p className="gridtitle">Complex Image</p>
                        <p><span className="basic"><BiRupee />3.50</span>
                            <div className="smalltxt">per image</div></p>
                        <img src={earings}></img>
                    </div>

                </div>
                <div className="submitbutton" >
                    <div> <button className='button3' type="submit">View Samples</button></div>
                    <div> <button className='button1' type="submit">Contact US</button></div>
                </div>
            </div>
            <div>
                <h1 style={{ marginBottom: 100,marginTop:100 }} className="headdiv">Frequently Asked Questions</h1>
            </div>
        </div>
    )

}

export default Pricing;