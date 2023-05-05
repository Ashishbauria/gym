import { Box,Button,Typography } from "@mui/material";
import React,{useContext}  from "react";
import {ScrollMenu,VisibilityContext} from 'react-horizontal-scrolling-menu'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard'



const HorizontalScrollBar = ({data,setbodyPart,bodyPart}) => {
 


  function LeftArrow() {
    const { scrollPrev } =React.useContext(VisibilityContext);
  
      return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
          <img src={LeftArrowIcon} alt="right-arrow" />
        </Typography>
      );
  }
      
      function RightArrow() {
        const { scrollNext } = React.useContext(VisibilityContext);
      
        return (
          <Typography onClick={() => scrollNext()} className="left-arrow">
            <img src={RightArrowIcon} alt="right-arrow" />
          </Typography>
        );
        }

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map((item) => (
        <Box
          key={data.id || data}
          keyid={data.id || data}
          title={data.id || data}
            m="0 40px">
            <ExerciseCard exercise={item}/>
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
