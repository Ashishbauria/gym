import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Stack, Card, Button } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} loading="lazy" />
      <Typography
        ml="21px"
        fontWeight="bold"
        color="#000000"
        fontSize="21px"
        mt="-8px"
      >
        {exercise.name}
      </Typography>
      <Stack direction="row" mb="32px">
        <Button
          sx={{
            ml: "21px",
            background: "#FF5252",
            color: "#404040",
            borderRadius: "18px",
            textTransform: "centalize",
            fontSize: "14px",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            background: "#FDE08F",
            color: "#404040",
            borderRadius: "18px",
            textTransform: "centalize",
            fontSize: "14px",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
    </Link>
  );
};

export default ExerciseCard;
