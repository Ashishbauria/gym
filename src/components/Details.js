import React from 'react'
import { Typography,Button, Stack } from '@mui/material'
import bodypartimage from '../assets/icons/body-part.png'
import targetimage from '../assets/icons/target.png'
import equipmentimage from '../assets/icons/equipment.png'

const Details = ({exerciseDetail}) => {
  const {bodyPart, gifUrl , name,target,equipment} =exerciseDetail;

  const extraDetail =[
    {
      icon:bodypartimage,
      name_:bodyPart
    },
    {
      icon:targetimage,
      name_:target
    },
    {
      icon:equipmentimage,
      name_:equipment
    },
  ]

  return (
     <Stack gap='60px' sx={{flexDirection:'row', p:'20px', alignItem:'center'}}>
        <img src={gifUrl} alt={name} className='detail-image'/>
        <Stack sx={{gap:'35px'}}>
          <Typography variant='h3' fontWeight='bold' textTransform='capitalize'>
            {name}
          </Typography>
          <Typography variant='h6'>
          Exercise is a body activity that enhances or maintains physical fitness and overall health and wellness.It is performed for various reasons, to aid growth and improve strength, develop muscles and the cardiovascular system, hone athletic skills, weight loss or maintenance, improve health, or simply for enjoyment. Many individuals choose to exercise outdoors where they can congregate in groups, socialize, and improve well-being as well as mental health.
          </Typography>
          
          {
          extraDetail.map((item,i)=>(
            <Stack key={i} direction='row' alignItems='center' gap='24px'>
              <Button sx={{borderRadius:'50%',backgroundColor:'#fff2db'}}>
                <img src={item.icon}/>
              </Button>
              <Typography variant='h5' textTransform='capitalize'>
                {item.name_}
              </Typography>
            </Stack>
          ))}
        </Stack>

    </Stack>
  )
}

export default Details
