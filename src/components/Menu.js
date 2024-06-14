import React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import {Button,Grid} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Menu = () => {
  const menuItems = [
    
  ];

  const backgroundStyle = {
    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1676122795719-6fa9374a46c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dHJhaW58ZW58MHx8MHx8fDA%3D")', // Replace with your actual image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <section className="menu" style={{ ...backgroundStyle, padding: '40px' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-ezI0LlT53Z02Vp1OKL68HiL/7yIiN0s9YGBO3SN/WEQ0fPvKVtjk4/X+02zefWXp" crossorigin="anonymous"/>

      <nav style={{ background: '#333', padding: '10px', color: 'white',border:'20px solid black' }}>
      <Grid container justifyContent="space-around" alignItems="center">
        <Grid item>
          <h1 style={{ margin: 0 }}>Balavin Trains</h1>
        </Grid>
        <Grid item>
          <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <li style={{ margin: '0 10px' }}>Home</li>
            <li style={{ margin: '0 10px' }}>Profile</li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/lo">
                <Button variant="contained">Sign In</Button>
              </Link>
            </li>
            <li style={{ margin: '0 10px' }}>
              <Link to="/re">
                <Button variant="contained">Register</Button>
              </Link>
            </li>
          </ul>
        </Grid>
      </Grid>
    </nav>

      <div>
  
            
            <div className="box">
                <div className="inbox">
                    <div className="temp"></div>
                    <forms>

                <h1 style={{marginBottom:'15px',marginTop:"10px"}}>Book Ticket</h1>
                <br></br>
                <h2 style={{marginBottom:'15px'}}> From the destination</h2>
                <input style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px',padding:'10px'}} placeholder="Start Location"></input>
                <br></br>
                <h2 style={{marginBottom:'15px'}}>To the destination</h2>
                <input style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px',padding:'10px'}} placeholder="End Location"></input>
                <br></br>
                <h2 style={{marginBottom:'15px'}}>Journey</h2>
                <select style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px'}}>
                    <option>One-way-Journey</option>
                    <option>two-way-Journey</option>
                </select>
                <br></br>
                <h2 style={{marginBottom:'15px'}}>Date of Travel</h2>
                <input style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px',padding:'10px'}} className="dat" placeholder="Select Date" type="Date"></input>
                <br></br>
                <h2 style={{marginBottom:'15px'}}>Ticket types</h2>
                <select style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px'}}>
                    <option>High-Class</option>
                    <option>Eco-Class</option>
                    <option>General-Class</option>
                </select>
                <br></br>
                <h2 style={{marginBottom:'15px'}}>Seat Type</h2>
                <select style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px'}}>
                    <option>Recliner</option>
                    <option>Semi-Recliner</option>
                    <option>Sleeper</option>
                </select>
                <br></br>
                <h2 style={{marginBottom:'15px'}}>Passengers</h2>
                <select value="1" style={{marginBottom:'40px',borderRadius:'10px',width:'240px',height:'30px'}}>
                    <option style={{paddingBottom:'10px'}}>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>

                </select>
                <br></br><br></br><br></br>
                <Button variant='contained' className="but" style={{marginBottom:'100px',backgroundColor:'blue',color:'white'}}>
                    <a href="https://www.irctc.co.in/nget/train-search" target="blank" Style="text-decoration: none" style={{color:'white'}}>Search Train</a>
                
                    </Button>
                    </forms>

                </div>
                <div className="Temp">
                </div>
            </div>
        
        </div>
      <footer style={{ background: 'black', padding: '10px', color: 'white', textAlign: 'center',marginTop:'40px'}}>
      <p>
        &copy; 2023 Balavin Trains. All rights reserved. Follow us on instagram @Balavin_Trains<br></br>Contact us on +1800 1444 1833
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" style={{ margin: '0 5px' }}></i>
        </a>
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-google" style={{ margin: '0 5px' }}></i>
        </a>
        <a href="https://www.xapp.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-xing" style={{ margin: '0 5px' }}></i>
        </a>
      </p>
    </footer>
    </section>
    
  );
};

export default Menu;
