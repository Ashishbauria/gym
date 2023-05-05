import React, { useEffect, useState } from "react";
import { Box, Typography, Stack, Button, TextField } from "@mui/material";
import { Fetchdata, exerciseOption } from "../utils/Fetchdata";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercise = ({ setexercises, bodyPart, setbodyPart }) => {
  const [search, setsearch] = useState("");

  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchexersicedata = async () => {
      const fetchexercises = await Fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOption
      );
      setbodyParts([...fetchexercises]);
    };
    //fetchexersicedata();
  }, []);

  const Handlesearch = async () => {
    if (search) {
      const exerciseData = await Fetchdata(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOption
      );
      

      const SearchedExercise = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      setexercises(SearchedExercise);

      setsearch("");
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px">
      <Typography fontWeight={700} textAlign="center" fontSize={40} mt="-500px">
        Awesome exercise you <br />
        should Know
      </Typography>
      <Box position="relative" mt="20px">
        <TextField
          sx={{
            input: {
              border: "none",
              borderRadius: "5px",
              fontWeight: "100px",
            },
            width: "800px",
          }}
          height="72px"
          value={search}
          type="text"
          placeholder="Search Exercise..."
          onChange={(event) => setsearch(event.target.value.toLowerCase())}
        />
        <Button
          style={{
            backgroundColor: "#ff2625",
            position: "absolute",
            color: "white",
            width: "175px",
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={Handlesearch}
        >
          Search
        </Button>
      </Box>
      
    </Stack>
  );
};

export default SearchExercise;
