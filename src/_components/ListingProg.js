"use client";
import React from "react";
import { Box, Typography, LinearProgress } from "@mui/material";

const ratingsData = [
  { rating: 5, value: 80 }, // 80% progress
  { rating: 4, value: 0 }, // 60% progress
  { rating: 3, value: 0 }, // 40% progress
  { rating: 2, value: 0 }, // 20% progress
  { rating: 1, value: 0 }, // 10% progress
];

const LinearProgressDeterminate = () => {
  return (
    <Box sx={{ width: "100%", maxWidth: "500px" }}>
      {ratingsData.map((item, index) => (
        <Box
          key={index}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            mb: 1,
          }}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "14px",
              color: "#FFF",
              minWidth: "16px",
            }}>
            {item.rating}
          </Typography>
          <LinearProgress
            variant="determinate"
            value={item.value}
            sx={{
              flexGrow: 1,
              height: "8px",
              borderRadius: "4px",
              backgroundColor: "#333",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#FFAE1B",
              },
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default LinearProgressDeterminate;
