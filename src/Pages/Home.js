import React, {useState} from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercise from '../components/Exercise'

const Home = () => {
  const [bodyPart,setbodyPart]=useState('All');
  const [exercises, setexercises] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercise bodyPart={bodyPart} setbodyPart={setbodyPart} setexercises={setexercises}/>
      <Exercise exercises={exercises} setexercises={setexercises} bodyPart={bodyPart}/>
    </Box>
  )
}

export default Home

