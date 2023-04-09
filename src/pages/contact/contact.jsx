import { React, useState } from 'react'
import Header from '../../Components/Head/Header'
import Footer from '../../Components/Footer/Footer';
import "./contact.css"
import Footer from "../../Components/Footer/Footer"
import { facebookicon,youtubeicon,instaIcon,linkedin } from '../../Assets/icon'
function Contact() {

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendmessage = (e) => {
    e.preventDefault();
    // Handle form submission here
  };


  return (
    <div>
      <Header />

      <section className='contcontainer'>
        <h2 className='contacth2'>Send message?</h2>
        <small className='small'>have a project in mind
          we would love to  help you out
        </small>

        <h2 className='contacth2'>Your message here</h2>
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
                  type="phone"
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


            <button className='buttonsmt  ' type="submit">Send message</button>
          </form>
        </div>


        <div className='carddisplay'>
          <div className='contactcard'>
            <h3 cardh6>Locate us </h3>
            <small>No 662, 9th Main Rd, Sector 7, HSR Layout,
              Bengaluru,Karnataka 560 102</small>
              <h3>Ring us,</h3>
              <small>
              +91 99725 64671
              </small>
              <h3>Follow Us</h3>

              <div className='d-flex align-items-center'>
       <div className='ml-2'><a href="https://www.facebook.com/shineditzz">
        {facebookicon}
       </a></div>
       <div className='mx-2'><a href="https://www.youtube.com/channel/UCR0rBe3RisbD_tXq-FMeTFA">
        {youtubeicon}</a></div>
       <div className='mx-2'><a href="https://www.instagram.com/shineditzz/">
        {instaIcon}</a></div>
       <div className='mx-2'><a href="https://www.linkedin.com/in/aszen-technologies/">
        {linkedin}</a></div>
     </div>

          </div>
          <div className='contactcard'>
          <h3 cardh6>Mails for you,</h3>
            <h6>Orders</h6>
            <d className='mail' >info@shineditz.com</d>
            <h6>Support</h6>
            <d className='mail'>shhineditz@gmail.com </d> <br></br>

            <button className='button2'>Check out the services we offer</button>
          </div>

        </div>
        <Footer/>








      </section >
      <div className='mt-2'>
        <Footer/>
      </div>

    </div >
  )
}

export default Contact