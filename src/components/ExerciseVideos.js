import React from 'react'
import {Box,Typography,Stack} from '@mui/material'
const ExerciseVideos = ({exerciseVideos,exerciseName}) => {
  return (
    <Box sx={{mt:'100px' }} p='20px' >
      <Typography variant='h3' mb='30px'>
        Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{exerciseName}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' alignItems='center' ml='25px' flexWrap='wrap' sx={{flexDirection:'row', gap:'100px'}}>
        {
          exerciseVideos?.slice(0,6).map((item,index)=>(
              <a key={index}
              className='exercise-video'
              href={`https:/www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'>
                <img src={item.video.thumbnails[0].url}/>
                <Box ml='10px'>
                  <Typography variant='h5' color='#000'>
                    {item.video.title}
                  </Typography>
                  <Typography variant='h6' color='#000'>
                    {item.video.channelName}
                  </Typography>
                </Box>
              </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
