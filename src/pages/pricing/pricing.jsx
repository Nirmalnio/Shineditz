import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Head/Header";
import './pricing.css';
import basic from "../../Assets/Images/retouch image.jpg";


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
                        <button className="buttoncards">Clipping path</button>
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
                <div className="card2">
                    <div>
                        <p>Basic Image</p>
                        <p>0.30<small>per image</small> </p>
                        <img src={basic}></img>
                    </div>
                    <div>
                        <p>Basic Image</p>
                        <p>0.30<small>per image</small> </p>
                        <img src={basic}></img>
                    </div>
                    <button className='button1' type="submit">Send message</button>

                </div>
            </div>
        </div>
    )

}

export default Pricing;