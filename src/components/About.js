import React from 'react'
import { Grid, Typography ,Button} from '@mui/material'
import Container from '@mui/material/Container';
import {  Link } from 'react-router-dom';

const About = () => {
  return (
	<>
  <Container maxWidth="md">
    <Typography variant='h2' gutterBottom style={{marginTop: "30px", textAlign: "center", color: "green", fontSize: "65px" , fontFamily: "-moz-initial"}}>
      About
    </Typography>
    <Typography variant='body1' style={{textAlign: "center", fontSize: "20px", fontFamily: "-moz-initial"}}> 
    <i><b style={{color: "Darkgreen"}}>Welcome To Green Environment Technologies -</b></i>The Foremost Leader In Environmental Engineering, Consulting, And Construction In Pakistan. As An End-To-End EPC <i style={{color: "darkgreen"}}><b>(Engineering, Procurement, And Construction)</b> </i>Provider, We Specialize In Creating Comprehensive, Sustainable Solutions Designed To Meet The Growing Environmental Needs Of Today, While Preparing For The Challenges Of Tomorrow. Our Commitment To Preserving The Environment Runs Deep. We Strive To Make A Significant Difference, Offering Cutting-Edge Air Pollution Control Strategies, Advanced Wastewater Treatment Technologies, And Renewable Energy Solutions. Our Goal Is Simple: To Nurture And Protect The Environment We All Call Home, And To Fight The Impacts Of Climate Change, One Project At A Time.
    </Typography>
    <Grid container spacing={1} style={{marginTop: "20px"}}>
    <Grid item xs={12} style={{background: "lightgreen", textAlign: "center"}}>
      <Typography variant='h4' style={{color: 'green', fontFamily: '-moz-initial'}}>
      Mission And Values:
      </Typography>
      <Typography variant='body2' style={{marginTop: "10px"}}>
      At Green Environment Technologies, Our Mission Is To Lead The Way In Environmental Stewardship In Pakistan, Developing Innovative, Sustainable Solutions That Help Communities Thrive While Protecting The Natural World. We Are Dedicated To Mitigating The Impacts Of Climate Change, Promoting Renewable Energy, And Preserving <br />The Quality Of Air And Water Through World-Class Services And Technologies. Our Work Aims To Contribute To A Healthier, Greener, And More Sustainable Future For Generations To Come.
      </Typography>
      <Button style={{background: "darkgreen" , color: "white", marginTop: "15px", borderRadius: "10px"}}><Link to="/Mission" style={{ textDecoration: "none", color: "white" }}>Read more</Link></Button>
    </Grid>
    <Grid item xs={12} style={{background: "lightgreen", marginTop: "20px", textAlign: "center"}}>
    <Typography variant='h4' style={{color: 'green', fontFamily: '-moz-initial'}}>
    Team
      </Typography>
      <Typography variant='body2' style={{marginTop: "10px"}}>
      Introduce Key Members Of The GET Team, Highlighting Their Expertise And Experience In Environmental Engineering, Project Management, And Other Relevant Areas.
      </Typography>
      <Button to="./Mission.js" style={{background: "darkgreen" , color: "white", marginTop: "15px", borderRadius: "10px"}}><Link to="/Team" style={{ textDecoration: "none", color: "white" }}>Read more</Link></Button>
    </Grid>
    </Grid>
  </Container>
	</>
  )
}

export default About
