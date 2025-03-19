"use client";
import Image from "next/image";
import { Box, Button, IconButton, Typography } from "@mui/material";
import location from "@/_assets/svgs/map-pin.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";

export default function HeroSection() {
  return (
    <>
      <Box
        component="main"
        sx={{
          background: "transparent",
          width: { lg: "100vw", xl: "100vw" },
          marginBottom: { xs: "40%", sm: "15%" },
          // height: "500px",
          // zIndex: 0,
          maxWidth: "1400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          padding: { xs: "2px", sm: "20px" },
        }}>
        <Box
          sx={{
            width: "100%",
            // width: { sm: "700px", lg: "956px" },
            height: "auto",
            display: "flex",

            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: { xs: "40px", sm: "50px" },
            // padding: { lg: "50px 50px" },
          }}>
          {/* heading */}
          {/* xs:"",sm:"",md:"", */}
          <Box
            sx={{
              width: { xs: "100%", lg: "950px" },

              fontSize: { xs: "8px", sm: "12px", md: "17px", lg: "18px" },
              lineHeight: { xs: "10px", sm: "27px" },
              verticalAlign: "bottom",
              letterSpacing: "0%",
            }}>
            <Box>
              <Box
                sx={{
                  fontSize: { xs: "25px", sm: "30px", md: "34px", lg: "42px" },
                  fontFamily: "Nunito",
                  fontWeight: { xs: "700" },
                  lineHeight: { xs: "30px", sm: "55px" },
                  verticalAlign: "bottom",
                  letterSpacing: "0%",
                  textAlign: "center",
                  padding: { xs: "5px" }, // Padding bhi kam ki
                }}>
                <Box
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "28px",
                      md: "30px",
                      lg: "35px",
                      // lg: "30px",
                    },
                    fontFamily: "Nunito",
                    fontWeight: { xs: "700" },
                    // lineHeight: { xs: "30px", sm: "72px" },
                    verticalAlign: "bottom",
                    letterSpacing: "0%",
                    textAlign: "center",
                    padding: { xs: "5px" },
                  }}>
                  Welcome to RentNation
                </Box>
                Where your island adventure begins!
              </Box>
            </Box>
            {/* para */}
            <Typography
              sx={{
                textAlign: "center",

                fontWeight: { xs: "200", sm: "200" },
                fontSize: { xs: "12px", sm: "14px", md: "17px", lg: "18px" },
                lineHeight: { xs: "15px", sm: "20px", md: "27px" },
                verticalAlign: "bottom",
                letterSpacing: "1px",
                fontFamily: "Nunito",
                // gap: "20px",
                color: "#EDEFF6",
              }}>
              Welcome to RentNation, where your next beach adventure begins!
              Whether you're craving a relaxing day by the shore or an exciting
              water exploration, we've got you covered. With our convenient
              rental services, you can choose between multiple fantastic options{" "}
            </Typography>
          </Box>
          {/* input////////////////////////////////////////////////--------------------------------------- */}

          <Box
            sx={{
              width: { xs: "250px", sm: "450px", md: "589px", lg: "589px" },
              height: { xs: "auto", sm: "50px" },

              bgcolor: "rgba(0, 0, 0, 0.042)",
              backdropFilter: "blur(12px)",
              // gap: { xs: "0px", sm: "0" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            {/* locato/////////////////////////////////// */}
            <Box
              sx={{
                width: { xs: "150px", sm: "130px", md: "139px" },
                height: "50px",

                borderRadius: "4px",
                display: "flex",
                // flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-evenly",
                alignItems: "center",
                gap: "2px",
                color: "#EDEFF6",
                bgcolor: "rgba(0, 0, 0, 0.442)",
                backdropFilter: "blur(12px)",
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
                width: { xs: "250px", sm: "370px", lg: "400px" },
                height: "50px",
                borderRadius: "4px",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "space-around",
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
                  width: { xs: "200px", sm: "250px" },
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
        </Box>
      </Box>
    </>
  );
}
