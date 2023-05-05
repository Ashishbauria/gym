import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "170px", xs: "70px" }, ml: { lg: "80px" } }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight="600" fontSize="26px">
        Fitness Hub
      </Typography>
      <Typography
        fontWeight="700"
        sx={{ fontSize: { lg: "58px", xs: "40px" } }}
      >
        Sweat, Smile <br />
        and Repeat
      </Typography>
      <Typography fontSize="18px" lineHeight="35px" mb='15px'>
        Check out the most effective Exercise
      </Typography>
      <Button href="#exercise" variant="contained" style={{backgroundColor:'#ff2625',position:'absolute'}}>
        Explore Exercise
      </Button>
      
      <img src={HeroBannerImage} alt='banner' style={{width:'550px', height:'750px', position:'relative',top:'-500px', right:'-800px'}}/>
    </Box>
  );
};

export default HeroBanner;
