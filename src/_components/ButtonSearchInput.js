"use client";
import Image from "next/image";
import { Box, Button, IconButton, Typography } from "@mui/material";
import location from "@/_assets/svgs/map-pin.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

export const SearchInput = () => {
  return (
    <>
      <Box
        sx={{
          width: { xs: "250px", sm: "450px", md: "589px", lg: "589px" },
          height: { xs: "auto", sm: "50px" },
          // zIndex: "12",
          bgcolor: "rgba(0, 0, 0, 0.342)",
          backdropFilter: "blur(77px)",
          // gap: { xs: "0px", sm: "0" },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "10px 0",
          borderRadius: "7px",
        }}>
        {/* locato/////////////////////////////////// */}
        <Box
          sx={{
            width: { xs: "150px", sm: "130px", md: "139px" },
            height: "50px",
            bgcolor: "rgba(0, 0, 0, 0.342)",
            backdropFilter: "blur(77px)",
            borderRadius: "4px",
            display: "flex",
            // flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: "2px",
            color: "#EDEFF6",
          }}>
          {/* <Box sx={{ fontSize: { sm: "12px", lg: "5px" } }}> */}
          <Image
            src={location}
            alt="location"
            width="16px"
            style={{
              // width: "18px",

              fontSize: { xs: "7", sm: "12px", lg: "14px" },

              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "27px",
              verticalAlign: "bottom",
              letterSpacing: "0%",
              fontFamily: "Nunito",
              margin: "10px",
            }}
          />

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: { xs: "7", sm: "12px", lg: "14px" },
              lineHeight: "27px",
              verticalAlign: "bottom",
              letterSpacing: "0%",
              fontFamily: "Nunito",
            }}>
            Location
          </Typography>
          <IconButton
            sx={{
              color: "white",
            }}>
            <KeyboardArrowDownIcon />
          </IconButton>
        </Box>
        {/* input///////////////////////////// */}
        <Box
          sx={{
            width: { xs: "250px", sm: "370px", md: "450px" },
            height: "50px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2px",

            // bgcolor: "rgba(0, 0, 0, 0.042)",
            // backdropFilter: "blur(12px)",
            color: "#EDEFF6",
          }}>
          <Box
            component="input"
            placeholder="Find beach, kayaks and cars"
            bgcolor="transparent"
            sx={{
              width: { xs: "250px" },
              border: "none",
              outline: "none",
              padding: "20px",
              fontSize: "14px",
              textAlign: "start",
              color: "#ccc",
            }}></Box>
          {/* <IconButton
                   sx={{
                     color: "white",
                   }}>
                   <MoreVertIcon />
                 </IconButton> */}
          <Box
            variant="contained"
            sx={{
              width: { xs: "100%", sm: "50px", md: "120px", lg: "130px " },
              height: { xs: "38px", sm: "45px", md: "50px", lg: "50px " },
              fontSize: { xs: "8px", sm: "12px", lg: "14px" },
              fontWeight: { xs: "100", sm: "200", lg: "400" },
              textAlign: "center",
              bgcolor: "#FFAE1B",
              borderRadius: "4px",
              paddingTop: { xs: "0px", sm: "5px" },
              margin: " 0 2px",
            }}>
            <IconButton
              sx={{
                color: "black",
              }}>
              <SearchIcon />
            </IconButton>

            <Button
              sx={{
                color: "black",
                display: { xs: "none", md: "inline-block" },
              }}>
              {" "}
              Sreach
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};
