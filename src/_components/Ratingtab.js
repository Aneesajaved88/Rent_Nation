import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

function BasicRating() {
  const [value, setValue] = React.useState(1);

  return (
    <>
      <Box
        sx={{
          "& > legend": { mt: 2 },
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}>
        <Rating
          name="simple-controlled"
          value={value}
          max={1} // Only one star
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Typography
          component="legend"
          sx={{
            letterSpacing: "1px",
            fontFamily: "Nunito",
            fontSize: { md: "24px" },
            fontWeight: "700",
            lineHeight: "100%",
            // marginLeft: "8px",
          }}>
          4.8 rating
        </Typography>
      </Box>
    </>
  );
}

export default BasicRating;
