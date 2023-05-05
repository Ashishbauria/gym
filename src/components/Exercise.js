import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import Pagination from "@mui/material/Pagination";
import ExerciseCard from "./ExerciseCard";

const Exercise = ({ exercises, setExercises, bodtPart }) => {
  const [currentPage,setcurrentPage]=useState(1);
  const exercisePerPage =9;

  const indexofLastExercise = currentPage*exercisePerPage;
  const indexofFirstExercise = indexofLastExercise -exercisePerPage;
  const currentExercise =exercises.slice(indexofFirstExercise,indexofLastExercise)

  const paginate =(event,value)=>{
    setcurrentPage(value);
    window.scrollTo({top:1400, behavior:'smooth'})

  }


  return (
    <Box sx={{ mt: "110px" }} p="20px">
      <Typography variant="h3" mb="46px">
        Showing Exercise Results
      </Typography>
      <Stack direction="row" justifyContent="center" flexWrap="wrap" gap="px">
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
      
        <Pagination
          color="standard"
          defaultPage={1}
          count={Math.ceil(exercises.length / exercisePerPage)}
          size="large"
          page={currentPage}
          onChange={paginate}
          
        />
      </Stack>
    </Box>
  );
};

export default Exercise;
