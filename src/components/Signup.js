import React, {useState} from 'react';
import { Box } from '@mui/material';
import { Typography, TextField, Button, } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios"


function Signup(){

  const history=useNavigate();
 
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

   async function submit(e){
    e.preventDefault();
   
       try{
        await axios.post("http://localhost:8000/Signup",{
          name,email,password
        })
        .then((res) => {
          if (res.data === "exist") {
            alert("User already exists");
          } else if(res.data=== "notexist"){
            history("/site", { state: { id: email } });
          }
        })
        .catch((e) => {
          alert("Wrong details");
          console.log(e);
        })
       }
      
       catch(e){
             console.log(e);
       }
   }
 

  return (
  <>
      <div>
        <form>
          <Box 
          display="flex" 
          flexDirection={"column"} 
          maxWidth={400} 
          alignItems="center" 
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
          sx={{":hover":{
            boxShadow: "10px 10px 20px #ccc",
          },
        }} 
          >
             <Typography variant="h3" padding={3} textAlign="center" style={{color: "Green" }} >Signup</Typography>
             <TextField margin="normal" type={"text"} onChange={(e) => { setName(e.target.value)}} variant='outlined' placeholder='Name'/>
             <TextField margin="normal" type={"email"} onChange={(e) => { setEmail(e.target.value)}} variant='outlined' placeholder='Email' />
             <TextField margin="normal" type={"password"} onChange={(e) => { setPassword(e.target.value)}} variant='outlined' placeholder='Password' />
             <Button
              sx={{ marginTop: 3, borderRadius: 3, backgroundColor: 'darkgreen', maxWidth: "90px" }}
              variant="contained"
              onClick={submit}
            >
              Signup
            </Button>
            <Button sx={{ marginTop: 3, borderRadius: 3 }}>
              <Link to={{ pathname: "/Login", state: { id: email } }} style={{ textDecoration: "none", color: "darkgreen" }}>Do you have an account? Login</Link>
            </Button>
          </Box>
        </form>
      </div>
    </> 
  );
}

export default Signup
