import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/system'
import { BorderAll } from '@mui/icons-material'
const Navbar = () => {
  return (
    <Stack
      direction='row' 
      justifyContent='flex-start' m='10px'>
        <Link to='/' >
          <img src="" alt="Logo" style={{marginRight:'50px',width:'48px',height:'48px' }}/>
          </Link>
        <Stack
        direction='row'
        gap='40px'
        fontSize='24px'
        alignItems='flex-end'
        >
            <Link to="/" style ={{textDecoration: 'none',color:'#3A1212', borderBottom:'3px solid #FF2625'}}>
                Home
                </Link>
            <a href='#exercise' style ={{textDecoration: 'none',color:'#3A1212'}}>
                Exercise
            </a>
        
        </Stack>
    </Stack>
  )
}

export default Navbar
