import React,{useState} from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import get from './get.png.png';

const PAGES = ["About", "Services", "Projects", "Blog", "Clients","Contact", "LOGIN", "SIGNUP"];
const Bar = () => {
    const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Drawer open={open}
      onClose={() => setOpen(false)}
      >
           <List>
           <Link to="/Home">
            <img src={get} alt="" />
          </Link>
                   { 
                    PAGES.map((page, index) => (
                               <ListItemButton key={index}>
                               <ListItemIcon>
                                  <Link style={{textDecoration: "none", color: "green"}} to={`/${page.toLowerCase()}`}> 
                                       <ListItemText>{page}</ListItemText>
                                 </Link>
                               </ListItemIcon>
                               
                              </ListItemButton>
                    ))
                   }
           </List>
      </Drawer>
      <IconButton sx={{color: 'White', marginLeft: 'auto'}} onClick={()=> setOpen(!open)}>
        <MenuIcon/>
      </IconButton>
    </React.Fragment>
  )
}

export default Bar;
