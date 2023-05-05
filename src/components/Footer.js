import { Box, Typography ,Stack} from '@mui/material'

import React from 'react'

const Footer = () => {
  return (
   <Box mt='80px' alignItems='center' color='fff2f4'>
      <Stack alignItems='center' pt='24px' mb='30px'>
        <img src='' alt='logo'/>
        <Typography>
          @copyright CodersGym
        </Typography>
      </Stack>
   </Box>
  )
}

export default Footer
