import Container from '@mui/material/Container';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

const Projects = () => {
  return (
    <>
    <br />
    <Container maxWidth="lg">
    <h1 style={{textAlign: "center", color: "green", fontSize: "65px" , fontFamily: "-moz-initial"}}>Project</h1>
    <Grid  container spacing={5} style={{marginTop:"10px"}}>
     <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://avatars.mds.yandex.net/i?id=82c6494281a70294afed90626f45b4a9a01a0d27-10636981-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  style={{textAlign: "center"}}>
        EPC
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign: "center"}}>
        Detail The Full Scope Of GET's EPC Services, Including Engineering, Procurement, And Construction. Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://avatars.mds.yandex.net/i?id=82c6494281a70294afed90626f45b4a9a01a0d27-10636981-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
        Environmental Consulting
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{textAlign: "center"}}>
        Describe The Consulting Services Offered By GET, Such As Environmental Impact Assessments, Regulatory Compliance, And Sustainability Planning.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://avatars.mds.yandex.net/i?id=82c6494281a70294afed90626f45b4a9a01a0d27-10636981-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    <Grid  container spacing={5} style={{marginTop:"10px"}}>
     <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://avatars.mds.yandex.net/i?id=82c6494281a70294afed90626f45b4a9a01a0d27-10636981-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://avatars.mds.yandex.net/i?id=82c6494281a70294afed90626f45b4a9a01a0d27-10636981-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    <Grid item xs={12} ms={4} sm={4}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://avatars.mds.yandex.net/i?id=82c6494281a70294afed90626f45b4a9a01a0d27-10636981-images-thumbs&n=13"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
    </Container>
    </>
  )
}

export default Projects