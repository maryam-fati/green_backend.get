import React from 'react'
import get from './get.png.png'
import { Container } from '@mui/material'

const Mission = () => {
  return (
    <>
    <br />
    <br />
      <Container maxWidt="md">
       <img src={get} alt="" />
       <div className='mai' style={{background:"green", borderRadius:"20px"}}>
        <h1 style={{color:"white", fontSize:"40px"}}>Green Environment Technologies</h1>
        <hr />
          <h2 style={{textAlign:"center", color:"white"}}>"Mission Statement"</h2>
          <p style={{textAlign:"center", color:"white"}}>At Green Environment Technologies, our mission is to lead the way in environmental stewardship in Pakistan, developing innovative, sustainable solutions that help communities thrive while protecting the natural world. We are dedicated to mitigating the impacts of climate change, promoting renewable energy, and preserving the quality of air and water through world-class services and technologies. Our work aims to contribute to a healthier, greener, and more sustainable future for generations to come.</p>
          <hr />
          <h2 style={{textAlign:"center", color:"white"}}>"Our Values"</h2>
          <ul style={{ color:"white"}}>
            <li>
            Integrity:
              <p>We believe in conducting our business with honesty and transparency. Our relationships with clients, partners, and communities are built on trust, respect, and mutual benefit.</p>
            </li>
            <li>
            Innovation:
              <p>We are committed to embracing new ideas, techniques, and technologies to continually improve our services and solutions. We encourage a culture of creativity and curiosity that drives our passion for environmental preservation.</p>

            </li>
            <li>
            Excellence:
              <p>We strive for the highest standards in all that we do. From the quality of our work to the conduct of our professionals, we uphold a commitment to deliver the best to our clients and to the environment.</p>
            </li>
            <li >
            Collaboration:
              <p>We value the power of teamwork and partnership. Together, we can achieve more and make a larger impact on the global environmental scene. We aim to create and nurture partnerships that foster sustainable growth.</p>
            </li>
            <li>
            Sustainability:
              <p>At the core of our values lies our commitment to sustainability. We seek to ensure that our actions today do not compromise the environmental integrity of tomorrow. We're dedicated to creating a world where environmental care and business progress go hand in hand.</p>
            </li>
            <li>
            Respect:
              <p>We hold a deep respect for our planet and all its inhabitants. This respect guides us in everything we do, ensuring our projects are implemented with careful consideration for local ecosystems and communities.</p>
            </li>
          </ul>
          <hr />
          <br />
       </div>
      </Container>
    </>
  )
}

export default Mission
