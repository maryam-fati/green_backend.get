import { Container, Typography } from "@mui/material";
import React from "react";
import p5 from './p5.png';
import './backgroundImage.css';
import g from './g.png'

const divStyle = {
  backgroundImage: `url(${p5})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '40vh',
};
// const gStyle = {
//   backgroundImage: `url(${g2})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
//   minHeight: '100vh',
// };


function Home() {
  return (
    <>
    <div>
      <Container className="background" maxWidth="lg" style={divStyle}>
        <Typography style={{ textAlign: "center", paddingTop: "190px"}}>
          <h1 className="text" style={{ background:"lightgreen", color: "darkgreen", textAlign: "center", fontSize: "50px"}}><i>"Welcome to Green Enviroment Technologies"</i></h1>
        </Typography>
      </Container>
      <Container maxWidth="md">
            <h1 style={{ color: "darkgreen", textAlign: "center", fontSize: "50px"}}><i>Services</i></h1>
            <p style={{fontSize:"20px", textAlign:"center"}}> <i> "Provide an overview of the services offered by GET, including
						EPC, environmental consulting, and other related services." </i>	</p>
      </Container>
      <Container maxWidth="md">
      <img src={g} alt="" style={{width:"100%", height:"200px"}} />
      <h1 style={{ color: "darkgreen", textAlign: "center", fontSize: "50px"}}><i>Why Choose Us?</i></h1>
        <p style={{fontSize:"20px", textAlign:"center"}}><i>At Green Environment Technologies, we believe in making a positive impact and
						fostering sustainable development. Here are a few reasons why you should choose us:</i></p>
      </Container>
       <br />
       <Container maxWidth="md">
      <img src={g} alt="" style={{width:"100%", height:"200px"}} />
      <h1 style={{ color: "darkgreen", textAlign: "center", fontSize: "50px"}}><i>Testimonials</i></h1>
        <p style={{fontSize:"20px", textAlign:"center"}}><i>Include quotes or reviews from satisfied clients to build
						trust with potential customers.</i></p>
      </Container>
      <br />
      <Container maxWidth="md">
      <img src={g} alt="" style={{width:"100%", height:"200px"}} />
      <h1 style={{ color: "darkgreen", textAlign: "center", fontSize: "50px"}}><i>Call to Action</i></h1>
        <p style={{fontSize:"20px", textAlign:"center"}}><i>Encourage visitors to contact GET for more information
						or to schedule a consultation.</i></p>
      </Container>
      </div>
    </>  
  );
}

export default Home;