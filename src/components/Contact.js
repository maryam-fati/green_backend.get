import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import get from './get.png.png';

const Contact = () => {
  return (
    <>
         <h1 style={{textAlign: "center", color: "green", fontSize: "65px" , fontFamily: "-moz-initial"}}>Contact</h1>
      <div className='1-mai' style={{display: "flex"}}>
        <div className='c-mai' style={{width: "50%"}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23078.288084510416!2d74.28194354170905!3d31.462312357965956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903e4b7e6ff87%3A0xcc62842150b2ec7!2sBlock-C%2C%20faisal%20Town!5e1!3m2!1sen!2s!4v1698343462968!5m2!1sen!2s" 
           width="100%"
              height="270" 
              title='map'
              style={{border:0, marginLeft: "10px", borderRadius: "0px"}}
              allowFullScreen="" 
              loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='1c-mai' style={{width: "50%", marginLeft: "20px", borderRadius: '20px', background: "darkgreen"}}>
          <h1 style={{textAlign: "center", color: "lightgreen", fontSize: "30px" }}> <i>All Info</i> </h1>
        <p style={{color: "white", textAlign: "center", fontSize: "17px"}} ><FaMapMarkerAlt className="icons"/>209-C Faisal Town Lahore punjab pakistan</p>
        <p style={{color: "white", textAlign: "center", fontSize: "17px"}}><FaPhoneAlt className="icons"/>+92 303 5388246</p>
        <p style={{color: "white", textAlign: "center", fontSize: "13px" }}><FaEnvelope className="icons"/>muhammadjahanzaib9@gmail.com</p>
        </div>
        </div>
        <br />
       <br />
    <div className='container' style={{background: "white",}}>
      <div className='contact-form' style={{background: "white", height: "auto", maxWidth: "50rem", margin: "auto"}}>
        <div className='main' style={{display: "flex"}}>
          <div>
          <img src={get} alt="" />
          </div>
          <div>
          <h1 style={{textAlign: "center",marginLeft:"50px", color: "darkgreen", fontSize: "35px" }}> <i>Get in Touch</i> </h1>
          </div>
        </div>
        <form action="https://formspree.io/f/mwkdyaor" method='POST' className='contact-input' style={{display: "flex",flexDirection: "column", marginTop: "20px", gap: "0.5rem"}}>
          <input 
          type="text" 
          name='username' 
          placeholder='username' 
          autoComplete='off' 
          required 
          style={{width: "400px", height: "30px", cursor: 'pointer', borderRadius: "05px", textAlign:"center"}}
          />

         <input 
          type="email" 
          name='Email' 
          placeholder='Email' 
          autoComplete='off'  
          required 
          style={{width: "400px", height: "30px", borderRadius: "05px", textAlign: "center"}}
          />

          <textarea 
          name="message" 
          cols="30" 
          rows="6" 
          autoComplete="off" 
          required
          ></textarea>
          <input type="submit" value="send"  style={{width: "120px", height: "40px", background: "green", color: "white", fontsixe: "50px", borderStyle: "none", borderRadius: '20px', marginLeft: "140px"}}/>

        </form>
       </div>
       </div>
    
    </>
  );
}

export default Contact
