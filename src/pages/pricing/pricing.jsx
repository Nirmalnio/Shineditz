import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../Components/Head/Header";
import './pricing.css';
import bag from "../../Assets/Images/bag.jpg";
import schoolbag from "../../Assets/Images/schoolbag.jpg";
import earings from "../../Assets/Images/earrings.jpg";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {BiRupee} from "react-icons/bi";



function Pricing() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        textAlign: 'center',
        borderRadius:'10',
        color: theme.palette.text.secondary,
    }));


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
                <div className="gridbox">
                    <Grid container spacing={0} mt={10} mb={5} mx={4}>
                        <Grid item xs={4} md={4}>
                            <Item>
                                <p className="gridtitle">Basic Image</p>
                                <p><span className="basic"><BiRupee/>0.30</span>
                                <div className="smalltxt">per image</div></p>
                                <img src={bag}></img>
                            </Item>
                        </Grid>
                        <Grid item xs={4} md={4}>
                        <Item>
                                <p className="gridtitle">Medium Image</p>
                                <p><span className="basic"><BiRupee/>1.50</span>
                                <div className="smalltxt">per image</div></p>
                                <img src={schoolbag}></img>
                            </Item>
                        </Grid>
                        <Grid item xs={4} md={4}>
                        <Item>
                                <p className="gridtitle">Complex Image</p>
                                <p><span className="basic"><BiRupee/>3.50</span>
                                <div className="smalltxt">per image</div></p>
                                <img src={earings}></img>
                            </Item>
                        </Grid>

                    </Grid>
                </div>
                <div className="submitbutton" >
                   <div> <button className='button3' type="submit">View Samples</button></div>
                   <div> <button className='button1' type="submit">Contact US</button></div>
                </div>
            </div>
            <div>
                <h1 style={{marginBottom:100}} className="headdiv ">Frequently Asked Questions</h1>
            </div>
        </div>
    )

}

export default Pricing;