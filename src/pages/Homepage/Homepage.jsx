import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Head/Header'
import "./homepage.css"
import Carousel from 'react-bootstrap/Carousel';
import silder1 from "../../Assets/Images/Banner 1.jpg"
import silder2 from "../../Assets/Images/Banner 2.jpg"
import silder3 from "../../Assets/Images/Banner 3.jpg"
import silder4 from "../../Assets/Images/Banner 4.gif"
import serives1 from "../../Assets/Images/hair-masking.jpg"
import serives2 from "../../Assets/Images/Photoshop-mannequin-effects.jpg"
import serives3 from "../../Assets/Images/retouch image.jpg"
import serives4 from "../../Assets/Images/shadow.jpg"
import serives5 from "../../Assets/Images/color-correction.jpg"
import global from "../../Assets/Images/globe.png"
import { handicon,Quick,data,Assured,iso,price } from '../../Assets/icon';
import Footer from '../../Components/Footer/Footer';
function Homepage() {

const services = [
  {
    id:1,
    headin: "Image Masking",
    desp:"Prepare for future photo editing with image files you can use for text wrapping, background removal, print media, and the web.",
    background:"linear-gradient(165.22deg, #CF8BF3 -25.3%, rgba(253, 185, 155, 0.5) 116.66%), rgba(237, 237, 237, 0.2)",
    image:serives1
  },
  {
    id:2,
    headin: "Ghost Mannequin",
    desp:"Prepare for future photo editing with image files you can use for text wrapping, background removal, print media, and the web.",
    background:"linear-gradient(165.22deg, #DAFFC4 -25.3%, #95EAFF 116.66%), rgba(237, 237, 237, 0.2)",
    image:serives2
  },{
    id:3,
    headin: "Photo Retouching",
    desp:"Prepare for future photo editing with image files you can use for text wrapping, background removal, print media, and the web.",
    background:"linear-gradient(165.22deg, #FFB443 -25.3%, rgba(255, 242, 129, 0.5) 116.66%), rgba(237, 237, 237, 0.2)",
    image:serives3
  },{
    id:4,
    headin: "Shadow Creation",
    desp:"Prepare for future photo editing with image files you can use for text wrapping, background removal, print media, and the web.",
    background:"linear-gradient(168.36deg, #FFEBCC -22.35%, #FF5A55 121.11%), rgba(237, 237, 237, 0.2)",
    image:serives4
  },{
    id:5,
    headin: "Color Correction ",
    desp:"Prepare for future photo editing with image files you can use for text wrapping, background removal, print media, and the web.",
    background:"linear-gradient(165.22deg, #B2FEFA -25.3%, #4579FF 116.66%), rgba(237, 237, 237, 0.2)",
    image:serives5
  },
  
]

   
  return (
    <div>
        <Header/>
        <div className='H-ptopdiv'>
        <div className='carousalitems'>
          <Carousel fade>
            <Carousel.Item interval={2000}>
              <img
               className='sliderimg'
                src={silder1}
              />
             
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <img
               className='sliderimg'
                src={silder2}
              />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
            <img
               className='sliderimg'
                src={silder3}
              />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
            <img
               className='sliderimg'
                src={silder4}
              />
            </Carousel.Item>
         </Carousel>
          </div>

        <div className='homepage-topdiv'>
          <h1>Enhance Your Product Images with </h1>
          <h2>Expert Photoshop Services</h2>
        </div>
         <div className='h-p-secndDiv'>
          <p className='h-p-descrip'>From a simple white background to the most complex clipping paths. Get pixel perfect image editing services,  Get Flawless Edits in just 12-16 hours with Sheneditz.</p>
         </div>
   
          
         </div>

        <div className='h-p-thirdDiv'>
              <h3>Empower your creation with Shineditz</h3>

              <p>Sheneditz provides top-quality photo editing services including Photoshop clipping path, masking, touch-up, retouching, and more. With a team of experienced designers, we guarantee 100% quality work at low cost and quick turnaround time.
                 Outsource your picture editing needs to us for cutting-edge results.</p>
        </div>

        <div className='h-p-cardsDiv'>
              <div className='cardssection'>
                      <div className='mb-2'>{handicon}</div>
                      <span className='cardsechead'>Manually Hand-Drawn</span>
                      <p className='cardsecdesp'>Pixel-perfect, Manual image editing by experienced designers for clean edges. No AI used.</p>
              </div>
              <div className='cardssection2'>
                      <div className='mb-2'>{Quick}</div>
                      <span className='cardsechead'>Quick Turnaround Time</span>
                      <p className='cardsecdesp'>Meet deadline with edited images by our clipping team. Rush service available at extra charge.</p>
              </div>
              <div className='cardssection3'>
                      <div className='mb-2'>{data}</div>
                      <span className='cardsechead'>Data Privacy</span>
                      <p className='cardsecdesp'>Pixel-perfect, Manual image editing by experienced designers for clean edges. No AI used.</p>
              </div>
              <div className='cardssection4'>
                      <div className='mb-2'>{Assured}</div>
                      <span className='cardsechead'>Assured Quality Control</span>
                      <p className='cardsecdesp'>Pixel-perfect, Manual image editing by experienced designers for clean edges. No AI used.</p>
              </div>
              <div className='cardssection5'>
                      <div className='mb-2'>{iso}</div>
                      <span className='cardsechead'>ISO 9001 Certified</span>
                      <p className='cardsecdesp'>Pixel-perfect, Manual image editing by experienced designers for clean edges. No AI used.</p>
              </div>
              <div className='cardssection6'>
                      <div className='mb-2'>{price}</div>
                      <span className='cardsechead'>Reasonable Price</span>
                      <p className='cardsecdesp'>Pixel-perfect, Manual image editing by experienced designers for clean edges. No AI used.</p>
              </div>
        </div>


        <div className='servicesDiv'>
              <h3>The image editing services you need</h3>
              <p> Experience Personalized and Creative Photo Retouching by our Skilled Editors,
                 Using Innovative Techniques that Produce Standout Results</p>
              <div>
               {services.map((item,id)=>{
                return(
                <div className='servisecard' key={id} style={{background:`${item?.background}`}}> 
                    <div className='servicetxts'>
                        <h5>{item?.headin}</h5>
                        <p>{item?.desp}</p>
                    </div>
                    <div className='serviceimg'>
                        <img src={item?.image} alt="serives" />
                    </div>
                </div>
                )
               })
                
                }
              </div>
        </div>


        <div className='globalDiv'>
       <img src={global} alt="" />

        <div className='mt-4'>
               <h5>See what sets Shineditz apart</h5>

               <div className='globalgird'>

               </div>
        </div>
        </div>

        <Footer/>
    </div>

  )
}

export default Homepage