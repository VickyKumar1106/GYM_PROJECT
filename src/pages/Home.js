import React, { useState } from 'react';
import { Box } from '@mui/material';


import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';
import Mission from '../components/Mission';
import BodyParts from '../components/BodyParts';
import  Details from '../components/Details';


const Home = () => {
  


  return (
    <Box>

      <HeroBanner />
      <SearchExercises  />
      <Mission />
      <BodyParts />
      <Details />
      {/* <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} /> */}
    </Box>
  );
};

export default Home;