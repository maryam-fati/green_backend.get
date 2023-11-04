import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions,CardActionArea } from '@mui/material';
import Container from '@mui/material/Container';
import project from './project-6.png';
import tower from './tower.png.jpg';
import How20Design20Water201 from './How20Design20Water201.png';


const Services = () => {
  return (
    <>
    <Container maxWidth="lg">
    <h1 style={{textAlign: "center", color: "green", fontSize: "65px" , fontFamily: "-moz-initial"}}>Services</h1>
      <p style={{textAlign: "center", fontSize: "25px", fontFamily: "-moz-initial"}}>At Green Environment Technologies, Our Services Encompass The Full Spectrum Of Environmental Management</p>
     <Grid  container spacing={5} style={{marginTop:"10px"}}>
     <Grid item xs={12} ms={4} sm={4}>
     <Card sx={{ maxWidth: 345 }} style={{padding:"10px", marginBottom:"30px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={tower}
          alt="solar panel"
          style={{borderRadius: "30px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Air Pollution Control
          </Typography>
          <Typography variant="body2" color="text.secondary">
          We Provide Innovative Strategies And Technologies To Reduce And Manage Air Pollution, Improving Air Quality For Healthier, Safer Communities.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }} style={{padding:"10px", marginBottom:"30px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={How20Design20Water201}
          alt="solar panel"
          style={{borderRadius: "30px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Waste Water Treatment
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Our Efficient Wastewater Treatment Solutions Help Manage And Recycle Waste, Turning Potential Environmental Hazards Into Valuable Resources.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }} style={{padding:"10px", marginBottom:"30px"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={project}
          alt="solar panel"
          style={{borderRadius: "30px"}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Renewable Energy
          </Typography>
          <Typography variant="body2" color="text.secondary" fontSize="13.5px">
          We're Passionate About Clean Energy. Our Team Specializes In Harnessing And Implementing Renewable Energy Solutions, Paving The Way For A Greener, More Sustainable Future.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Container>
    </>
  )
}

export default Services
