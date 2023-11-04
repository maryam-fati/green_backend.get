import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Grid } from '@mui/material';

const Footer = () => {
  return (
    <>
                <div className="container" >
                    <Grid container spacing={3}>
                    <Grid item xs={4} style={{textAlign: "center"}}>
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3 style={{color:"green", fontSize:"20px"}}>About</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Laborum ea quo ex ullam <br />laboriosam magni totam,facere eos iure voluptate.</p>
                            <div className="footer-icons">
         <a href="https://www.facebook.com/home.php"><FaFacebook className="icons" /></a>
         <a href="https://twitter.com/"><FaTwitter className="icons" /></a>
         <a href="https://www.instagram.com/?__coig_restricted=1"><FaInstagram className="icons" /></a>
         <a href="https://web.whatsapp.com/"><FaWhatsapp className="icons" /></a>
        </div>
      </div>
      </Grid>
      <Grid item xs={4} style={{textAlign: "center"}}>
      <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h3 style={{color:"green", fontSize:"20px"}}>Quick Links</h3>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        </Grid>
                        <Grid item xs={3}>
      <div className="col-md-6 col-lg-4 col-12 ft-3">
        <h3 style={{color:"green", fontSize:"20px"}}>Contact Info</h3>
        <p><FaMapMarkerAlt className="icons"/>209-C Faisal Town Lahore punjab pakistan</p>
        <p><FaPhoneAlt className="icons"/>+92 303 5388246</p>
        <p><FaEnvelope className="icons"/>muhammadjahanzaib9@gmail.com</p>
      </div>
      </Grid>
      </Grid>
      </div>
      <div className='Last-footer'>
                <p>Copyright 2023 Green Environment Technologies. All Rights Reserved</p>
            </div>
            
    </>
  );
};

export default Footer
