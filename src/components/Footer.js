import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    {/* <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">Made with ❤️ by KaleCoders</Typography> */
    
    
<div className="footer">

<div className="box-container">

    <div className="box">
        <h3>about us</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>Amet pariatur rerum consectetur architecto ad tempora blanditiis quo aliquid inventore a.</p>
    </div>

    <div className="box">
        <h3>quick links</h3>
        <a href="#">home</a>
        <a href="#">features</a>
        <a href="#">about</a>
        <a href="#">review</a>
        <a href="#">pricing</a>
        <a href="#">contact</a>
    </div>

    <div className="box">
        <h3>follow us</h3>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">pinterest</a>
        <a href="#">twitter</a>
    </div>

    <div className="box">
        <h3>contact info</h3>
        <div className="info">
            <i className="fas fa-phone"></i>
            <p> +123-456-7890 <br/> +111-2222-333 </p>
        </div>
        <div className="info">
            <i className="fas fa-envelope"></i>
            <p> example@gmail.com <br /> example@gmail.com </p>
        </div>
        <div className="info">
            <i className="fas fa-map-marker-alt"></i>
            <p> Chandigarh, india - 400104 </p>
        </div>
    </div>

</div>

<h1 className="credit"> &copy; copyright @ 2022 by KaleCoders  </h1>

</div>
    
    
    }
  </Box>
);

export default Footer;