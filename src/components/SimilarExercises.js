import React from 'react'
import {Box,Typography,Stack} from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar'
const SimilarExercises = ({targetMuscleExercise,equipmentExercise}) => {
  return (
    <Box sx={{mt:'100px'}}>
      <Typography variant='h3'>
        Showing similar Target Muscle exercise
      </Typography>
      <Stack direction='row' sx={{position:'relative', p:'5'}}>
        {targetMuscleExercise.length && <HorizontalScrollBar data={targetMuscleExercise}/>}
      </Stack>

      <Typography variant='h3'>
        Exercises that use same Equipment
      </Typography>
      <Stack direction='row' sx={{position:'relative', p:'5'}}>
        {equipmentExercise.length && <HorizontalScrollBar data={equipmentExercise}/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
