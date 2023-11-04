import React,{useState} from 'react';
import Bar from './Bar'
import { AppBar, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import get from './get.png.png';


const PAGES = ["About", "Services", "Projects", "Clients", "Blog", "Contact"];
const Navbar = () => {
   const [value, setValue] = useState();
   const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
  return (
    <>
    <React.Fragment>
      <AppBar sx={{background: 'lightgreen'}}> 
        <Toolbar>
        <Link to="/Home">
            <img src={get} alt="" />
          </Link>
          {
                  isMatch ? (
                    <>
                    <Bar />
                    </>
                  ) : (
                      <>
                        <Tabs sx={{marginLeft: 'auto'}} textColor="inherit" value={value} onChange={(e,value)=> setValue(value)} indicatorColor="secondary">
                               {
                                  PAGES.map((page,index) => (
                                    <Tab key={index} label={<Link style={{textDecoration: "none", color: "darkgreen"}} to={`/${page}`}>{page}</Link>} />
                                  ))
                               }
                        </Tabs>

                        <Button sx={{ backgroundColor: 'darkgreen', marginLeft:"auto"}} variant="contained" > 
                        <Link style={{textDecoration: "none", color: "white"}} to="/login">Login{""}</Link>
                        </Button>

                        <Button sx={{ backgroundColor: 'darkgreen', marginLeft:"10px"}} variant="contained">
                          <Link style={{textDecoration: "none", color: "white"}} to="/Signup">SignUp{""}</Link>
                        </Button>
                    </>
                  )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
    </>
  );
};

export default Navbar
