import { React, useState,useEffect } from 'react'
import Header from '../../Components/Head/Header'
import Footer from '../../Components/Footer/Footer';
import "./contact.css";
import { facebookicon,youtubeicon,instaIcon,linkedin } from '../../Assets/icon'
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import success from "../../Assets/Images/tickicon.png"
// import nodemailer from 'nodemailer';
// import stream from 'stream-browserify';


function Contact() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader,setloader] = useState(false)
  const [show,setshow] = useState(false)


  useEffect(()=>{
       window.scrollTo(0,0)
  },[])

  const handleClose = ()=>{
    setshow(false)
  }

  const clear = () =>{
       setName("")
       setCategory("")
       setPhone("")
       setMessage("")
       setEmail("")
  }

  const sendmessage = (e) => {
    setloader(true)
    e.preventDefault();
    if(window.Email){
      window.Email.send({
        SecureToken : "e797746d-9287-4270-aedb-d300c34bff32",
        To : 'vistaeditz@gmail.com',
        From : "vistaeditz@gmail.com",
        Subject : `Request service from ${category}`,
        Body : `Name : ${name},
                email : ${email},
                phone Number : ${phone},
                message : ${message}`
    }).then((resp)=>{

      console.log(resp,"respoomce");
      setloader(false)
      setshow(true)
      clear()
      window.scrollTo(0,0)
    }
    );
    }
 
  };


  return (
    <div>
      <Header />

      <section className='contcontainer'>
        <h2 className='contacth2'>Send message?</h2>
        <p className='pen'>have a project in mind
          we would love to  help you out
        </p>

        <div>
          <form onSubmit={sendmessage}>
            <div className='flexdisplay'>
              <div className='borderinput'>

                <input
                  className='contact-input'
                  type="text"
                  placeholder='Name*'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />


                <input
                  className='contact-input'
                  type="tel"
                  value={phone}
                  placeholder='Phone Number*'
                  onChange={(e) => setPhone(e.target.value)}
                />


                <input
                  className='contact-input'
                  type="email"
                  value={email}
                  placeholder='Email*'
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className='borderinput'>
                <input
                  type="text"
                  className='contact-input'
                  placeholder='Category*'
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />

                <textarea
                  className='contact-input'
                  placeholder='Type your message*'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{minHeight:"130px",maxHeight:"150px",padding:"10px 15px"}}
                />
              </div>

            </div>

            {loader? 
            <button className='buttonsmt' ><Spinner animation="border" variant="light" /></button> :
            <button className='buttonsmt' type="submit">Send message</button>
            }
          </form>
        </div>


        <div className='carddisplay'>
          <div className='contactcard'>
            <h3 cardh6>Locate us </h3>
            <small>No 662, 9th Main Rd, Sector 7, HSR Layout,
              Bengaluru,Karnataka 560 102</small>
              <h3>Ring us,</h3>
              <small>
              +91 95385 37778
              </small>
              <h3>Follow Us</h3>

              <div className='d-flex align-items-center'>
       <div className='ml-2'><a href="https://www.facebook.com/vistaeditzz">
        {facebookicon}
       </a></div>
       <div className='mx-2'><a href="https://www.youtube.com/channel/UCR0rBe3RisbD_tXq-FMeTFA">
        {youtubeicon}</a></div>
       <div className='mx-2'><a href="https://www.instagram.com/vistaeditzz/">
        {instaIcon}</a></div>
       <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/">
        {linkedin}</a></div>
     </div>

          </div>
          <div className='contactcard'>
          <h3 cardh6>Mails for you,</h3>
            <h6>Orders</h6>
            <d className='mail' >david@vistaeditz.com</d>
            <h6>Support</h6>
            <d className='mail'>vistaeditz@gmail.com </d> <br></br>

            <button className='button2'>Check out the services we offer</button>
          </div>

        </div>
      </section >
      
      <Footer/>


      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                  <img src={success} alt="success" style={{width:"80px",height:"auto"}}/>
                   <h1>Sent!</h1>
                   <span className='mt-3'>Our meet will contact you soon.</span>
          </div>
        </Modal.Body>
      </Modal>

    </div >
  )
}

export default Contact