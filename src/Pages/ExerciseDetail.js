import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import { Fetchdata, exerciseOption, youtubeOptions } from "../utils/Fetchdata";
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail,setexerciseDetail]=useState({});
  const [exerciseVideos,setexerciseVideos]=useState([]);
  const [targetMuscleExercise,settargetMuscleExercise]=useState([]);
  const [equipmentExercise,setequipmentExercise]=useState([]);
  
 

  const {id}=useParams();
  useEffect(()=>{
    const fetchdatafromUrl =async()=>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeUrl ='https://youtube-search-and-download.p.rapidapi.com'
  
      const exerciseDetailData = await Fetchdata(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOption)
      setexerciseDetail(exerciseDetailData);

      const youtubeSearchData = await Fetchdata(`${youtubeUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
      setexerciseVideos(youtubeSearchData.contents);

      const targetmuscleExerciseData = await Fetchdata(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOption);
      settargetMuscleExercise(targetmuscleExerciseData );

      const equipmentExerciseData = await Fetchdata(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOption);
      setequipmentExercise(equipmentExerciseData );
    }
    fetchdatafromUrl();
    
    window.scrollTo({top:1, behavior:'smooth'})

  },[id])


  return (
   <Box>
    <Details exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} exerciseName={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise}/>


   </Box>
  )
}

export default ExerciseDetail
