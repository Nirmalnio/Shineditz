import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Head/Header";
import "./homepage.css";
// import {useHistory} from "react-router"
// import Carousel from "react-bootstrap/Carousel";
// import silder1 from "../../Assets/Images/Banner 1.jpg";
// import silder2 from "../../Assets/Images/Banner 2.jpg";
// import silder3 from "../../Assets/Images/Banner 3.jpg";
// import silder4 from "../../Assets/Images/Banner 4.gif";
// import serives1 from "../../Assets/Images/hair-masking.jpg";
// import serives2 from "../../Assets/Images/Photoshop-mannequin-effects.jpg";
// import serives3 from "../../Assets/Images/retouch image.jpg";
// import serives4 from "../../Assets/Images/shadow.jpg";
// import serives5 from "../../Assets/Images/color-correction.jpg";
import global from "../../Assets/Images/globe.png";
import {
  handicon,
  Quick,
  data,
  Assured,
  iso,
  prices,
  clippingpath,
  masking,
  retouching,
  colorcorrection,
  showcorrection,
  Ghostmasking,
} from "../../Assets/icon";
import Footer from "../../Components/Footer/Footer";
import carouselimg from "../../Assets/Images/caursel.jpg";

function Homepage() {
  const [price, setprice] = useState("Clipping Services");

  // const router = useHistory()
  const services = [
    //
  ];

  const pricing = [
    {
      id: 1,
      image: clippingpath,
      name: "Clipping Services",
      basic: 0.3,
      medium: 1.5,
      complex: 3.5,
    },
    {
      id: 2,
      image: masking,
      name: "Image Masking",
      basic: 0.6,
      medium: 1.5,
      complex: 3.5,
    },
    {
      id: 3,
      image: retouching,
      name: "Photo Retouching",
      basic: 0.6,
      medium: 2.5,
      complex: 5.0,
    },
    {
      id: 4,
      image: colorcorrection,
      name: "Color Correction",
      basic: 0.25,
      medium: 0.65,
      complex: 3.5,
    },
    {
      id: 5,
      image: showcorrection,
      name: "Shadow Correction",
      basic: 0.2,
      medium: 0.5,
      complex: 0.75,
    },
    {
      id: 6,
      image: Ghostmasking,
      name: "Ghost Masking",
      basic: 0.65,
      medium: 1.0,
      complex: 1.5,
    },
  ];

  const Option = pricing.filter((item) => item?.name === price);

  console.log(Option, "options");

  return (
    <div>
      <Header />
      <div className="H-ptopdiv">
        {/* <div className='carousalitems'>
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
        </div> */}

        <div className="homepage-topdiv">
          <h1>Enhance Your Product Images with </h1>
          <h2>Expert Photoshop Services</h2>
        </div>
        <div className="carouselimg">
          <img className="sliderimg" src={carouselimg} />
        </div>

        {/* <div className='h-p-secndDiv'>
          <p className='h-p-descrip'>From a simple white background to the most complex clipping paths. Get pixel perfect image editing services,  Get Flawless Edits in just 12-16 hours with Sheneditz.</p>
        </div> */}
      </div>

      <div className="h-p-thirdDiv">
        <h3>Empower your creation with vistaeditz</h3>

        <p>
          vistaeditz provides top-quality photo editing services including
          Photoshop clipping path, masking, touch-up, retouching, and more. With
          a team of experienced designers, we guarantee 100% quality work at low
          cost and quick turnaround time. Outsource your picture editing needs
          to us for cutting-edge results.
        </p>
      </div>

      <div className="h-p-cardsDiv">
        <div className="cardssection">
          <div className="mb-2">{handicon}</div>
          <span className="cardsechead">Manually Hand-Drawn</span>
          <p className="cardsecdesp">
            Our organization values manual work over automation in certain
            areas, recognizing its potential to provide a sense of fulfillment
            and produce high-quality outcomes that demand skills, experience.
          </p>
        </div>
        <div className="cardssection2">
          <div className="mb-2">{Quick}</div>
          <span className="cardsechead">Quick Turnaround Time</span>
          <p className="cardsecdesp">
            We prioritize providing fast turnaround times to demonstrate our
            efficiency and commitment to customer satisfaction. We balance speed
            with quality to meet high standards.
          </p>
        </div>
        <div className="cardssection3">
          <div className="mb-2">{data}</div>
          <span className="cardsechead">Data Privacy</span>
          <p className="cardsecdesp">
            Our organization prioritizes data privacy of our customers by
            implementing measures to protect personal data, building trust and
            avoiding data breaches and regulatory fines.
          </p>
        </div>
        <div className="cardssection4">
          <div className="mb-2">{Assured}</div>
          <span className="cardsechead">Assured Quality Control</span>
          <p className="cardsecdesp">
            We prioritize customer satisfaction, compliance with regulations,
            and company reputation by implementing a rigorous quality control
            process. Our unwavering commitment to quality ensures we exceed
            customer expectations and address potential issues proactively..
          </p>
        </div>
        <div className="cardssection5">
          <div className="mb-2">{iso}</div>
          <span className="cardsechead"> Real Time tracking </span>
          <p className="cardsecdesp">
            Real-time tracking can provide valuable insights and improve
            decision-making by providing instant access to data. However, it is
            important to ensure that privacy concerns are addressed, and that
            data is secured and used ethically.
          </p>
        </div>
        <div className="cardssection6">
          <div className="mb-2">{prices}</div>
          <span className="cardsechead">Reasonable Price</span>
          <p className="cardsecdesp">
            Our belief is that a reasonable price should be fair and justifiable
            for both the customer and the business, reflecting the product or
            service value, while also being competitive in the market and
            allowing for a reasonable profit margin.
          </p>
        </div>
      </div>

      <div className="servicesDiv">
        <h3>The image editing services you need</h3>
        <h4>
          
          Experience Personalized and Creative Photo Retouching by our Skilled
          Editors, Using Innovative Techniques that Produce Standout Results
        </h4>

        <p>
          Welcome to Aszen - Your Trusted Partner for Business Process
          Outsourcing and Image Editing Services! Aszen is a leading provider of
          comprehensive business process outsourcing services and specialized
          real estate photo editing services. With a focus on excellence and
          customer satisfaction, we cater to the needs of real estate
          photographers and real estate agents worldwide. Aszen takes pride in
          offering high-quality image editing services, including advanced photo
          editing. Our team of skilled professionals excels in performing color
          correcting techniques to enhance the visual appeal and accuracy of
          your images. From adjusting exposure and brightness to fine-tuning
          color balance, we ensure that every photo showcases the property in
          its best light. With our high-end photo editing services, we go beyond
          basic enhancements to deliver outstanding visuals that truly stand
          out. Our experienced editors employ advanced techniques to optimize
          lighting, composition, and overall image quality. The result?
          Stunning, captivating images that make a lasting impression on
          viewers. We understand the demands of a global clientele, which is why
          we provide worldwide service. No matter where you are located, our
          dedicated team is ready to assist you with your image editing needs.
          Our commitment to excellence and attention to detail have earned us
          the trust of over 1000 clients from all corners of the world. Aszen is
          your go-to photo editing company for a wide range of services. Whether
          you need image editing services, photo editing services, or want to
          outsource photo edits or image edits, we have the expertise and
          resources to meet your requirements. By outsourcing your photo editing
          needs to Aszen, you can save time, resources, and effort. Our
          streamlined processes and efficient turnaround times ensure that you
          receive high-quality results without any hassle. Experience the
          benefits of partnering with Aszen. Join our worldwide network of
          satisfied clients and let us elevate your real estate visuals to new
          heights. Contact Aszen today to discuss your image editing needs and
          discover how our services can enhance your business. Together,
          we&#39;ll transform your photos, streamline your processes, and make a
          lasting impact in the world of real estate.
        </p>
        <div className="serivescardContainer">
          {services.map((item, id) => {
            return (
              <div /* onClick={()=>router.push("/serives")} */
                className="servisecard"
                key={id}
                style={{ background: `${item?.background}` }}
              >
                <div className="servicetxts">
                  <h5>{item?.headin}</h5>
                  <p>{item?.desp}</p>
                </div>
                <div className="serviceimg">
                  <img src={item?.image} alt="serives" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <<========Global customer=> */}
      <div className="globalDiv">
        <img src={global} alt="" className="globalimg" />

        <div className="globalbtm">
          <h5 className="globalrighttxt">See what sets vistaeditz apart</h5>

          <div className="globalgird">
            <div className="globalservcard1">
              <b className="glob-count">1,850+</b>
              <p className="glob-text">Happy Customers</p>
            </div>
            <div className="globalservcard2">
              <b className="glob-count">99.7%</b>
              <p className="glob-text">On Time Delivery</p>
            </div>
            <div className="globalservcard4">
              <b className="glob-count">79,000+</b>
              <p className="glob-text">Edited Images</p>
            </div>
            <div className="globalservcard3">
              <b className="glob-count">120+</b>
              <p className="glob-text">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/*<<======= princing ==========>> */}

      <div className="pricingplanDiv">
        <h5>Choose a plan that suits you</h5>
        <div className="pricing-div">
          <div className="pricingItems">
            {pricing?.map((items, id) => {
              return (
                <div
                  className={
                    price === items?.name ? "pricingitemActive" : "pricingitem"
                  }
                  onClick={() => setprice(items?.name)}
                  key={id}
                >
                  <div>{items?.image}</div>
                  <span>{items?.name}</span>
                </div>
              );
            })}
          </div>

          <div className="pricingdetails">
            <div className="pricinghead">
              <span>{price} - Pricing Details</span>
            </div>
            <div>
              <div className="d-flex justify-content-between align-items-center pricing-box">
                <p>Basic</p>
                <span>
                  <b style={{ fontSize: "22px" }}>
                    $ {Option[0]?.basic.toFixed(2)}
                  </b>
                  / per image
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center pricing-box">
                <p>Medium</p>
                <span>
                  <b style={{ fontSize: "22px" }}>
                    $ {Option[0]?.medium.toFixed(2)}
                  </b>
                  / per image
                </span>
              </div>
              <div className="d-flex justify-content-between align-items-center pricing-box">
                <p>Complex</p>
                <span>
                  <b style={{ fontSize: "22px" }}>
                    $ {Option[0]?.complex.toFixed(2)}
                  </b>
                  / per image
                </span>
              </div>
            </div>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div className="contactusbtn">Contact Us</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="reviewsdiv">
        <h5>1,850+ satisfied customers</h5>

        <div className="reviewsec">
          <marquee
            width="100%"
            direction="left"
            height="auto"
            className="d-flex "
          >
            <div className="d-flex justify-content-between">
              <div className="reviewcard">
                <div>
                  <b>Farah Mohan</b>
                  <span>I absolutely loved their edits.</span>
                </div>
                <small>23/05/2020</small>
              </div>

              <div className="reviewcard">
                <div>
                  <b>Saraswathi</b>
                  <span>Good services.</span>
                </div>
                <small>23/05/2020</small>
              </div>

              <div className="reviewcard">
                <div>
                  <b> Mohan</b>
                  <span>I absolutely on time delivery.</span>
                </div>
                <small>23/05/2020</small>
              </div>
            </div>
          </marquee>
          <br />
          <marquee
            width="100%"
            direction="right"
            height="auto"
            className="d-flex "
          >
            <div className="d-flex justify-content-between">
              <div className="reviewcard">
                <div>
                  <b>Fharan steve</b>
                  <span>On time delivery. good services </span>
                </div>
                <small>23/05/2020</small>
              </div>

              <div className="reviewcard">
                <div>
                  <b>Juliana Steven</b>
                  <span>I absolutely loved their edits.</span>
                </div>
                <small>23/05/2020</small>
              </div>

              <div className="reviewcard">
                <div>
                  <b>thomas irfan</b>
                  <span>
                    Fast and quality image editing.
                    <br /> i loved their work
                  </span>
                </div>
                <small>23/05/2020</small>
              </div>
            </div>
          </marquee>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;
