import { React, useState } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../../Components/Head/Header'
import "./contact.css"

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
                  className='textarea'
                  placeholder='Type your message*'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

            </div>


            <button className='button1' type="submit">Send message</button>
          </form>
        </div>


        <div className='carddisplay'>
          <div className='contactcard'>
            <h3 cardh6>Locate us </h3>
            <small>No 14, 17th Main Rd, Sector 3, HSR Layout,
              Bengaluru,Karnataka 560102</small>
              <h3>Ring us,</h3>
              <small>
              +91 098349 38257
              </small>
              <h3>Follow Us</h3>



          </div>
          <div className='contactcard'>
          <h3 cardh6>Mails for you,</h3>
            <h6>Orders</h6>
            <d className='mail' >ordersshineditz@gmail.com</d>
            <h6>Support</h6>
            <d className='mail'>support@shineditz.com </d> <br></br>

            <button className='button2'>Check out the services we offer</button>
          </div>

        </div>








      </section >

    </div >
  )
}

export default Contact