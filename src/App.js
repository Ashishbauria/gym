import React from 'react';
import './App.css';
import { Box } from '@mui/system';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import ExerciseDetail from './Pages/ExerciseDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Box width='400px' sx={{width:{xl:'1488px'}}} m="auto">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
