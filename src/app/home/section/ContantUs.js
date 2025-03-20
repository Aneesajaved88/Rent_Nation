"use client";
import { Box, Typography, IconButton, Divider, Button } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
export const ContantUs = () => {
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          maxWidth: "1400px",
          // position: "absolute",
          // top: { xs: 3900, sm: 3350, md: 3500, lg: 3600 },
          height: "auto",
          // right: { xs: 0, xl: "auto" },

          // position: "relative",
          // left: -10,
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "30px 0",
          // marginBottom: { xs: "60px", sm: "20px" },
        }}>
        <Box
          sx={{
            width: "90%",
            // padding: "  0 60px ",

            // height: "237px",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-evenly",
            alignItems: { xs: "center", md: "center" },
            // gap: { sm: "20px" },
            // padding: "20px",
          }}>
          {/* -------------------------------------------------------------------------- */}
          <Box
            sx={{
              width: { xs: "300px", md: "400px" },
              padding: { xs: "20px 40px", sm: "20px 0" },
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
              gap: "20px",
            }}>
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "15px", md: "22px", lg: "32px" },
                lineHeight: { xs: "10px", sm: "27px" },
                fontWeight: "700",
                verticalAlign: "bottom",
                letterSpacing: "0%",
                fontFamily: "Nunito",
              }}>
              Contact Us{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                lineHeight: { xs: "18px", sm: "27px" },
                verticalAlign: "bottom",
                fontWeight: "200",
                letterSpacing: "0%",
                fontFamily: "Nunito",
              }}>
              Contact us now if you have any question. Lorem ipsum dolor sit
              adipiscing elit.
            </Typography>
            <Box>
              <Button
                variant="outlined"
                color=" #FFAE1B"
                sx={{
                  padding: "10px",
                  fontSize: "14px",
                  lineHeight: "100%",
                  fontWeight: "100",
                  textAlign: "right",
                  verticalAlign: "bottom",
                  letterSpacing: "0.2px",
                  color: " #FFAE1B",
                  textTransform: "capitalize",
                  fontFamily: "Nunito",
                  padding: "6px 25px",
                }}>
                Contact Now
              </Button>
            </Box>
          </Box>
          <Box>
            <Divider
              color="#FFAE1B"
              sx={{
                width: "1px",
                height: "150px",
                display: { xs: "none", md: "block" },
              }}
            />
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box
            sx={{
              width: { xs: "300px", md: "400px" },
              padding: { xs: "20px 40px", sm: "20px 0px" },

              // width: "45%",
              // padding: "20px 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "start",
            }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <IconButton>
                <LocalPhoneOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  fontWeight: "200",
                  lineHeight: { xs: "10px", sm: "27px" },
                  verticalAlign: "bottom",
                  letterSpacing: "0%",
                  fontFamily: "Nunito",
                }}>
                +44 65748435748
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <IconButton>
                <MailOutlineOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  fontWeight: "200",
                  lineHeight: { xs: "10px", sm: "27px" },
                  verticalAlign: "bottom",
                  letterSpacing: "0%",
                  fontFamily: "Nunito",
                }}>
                contact@rentnation.com
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}>
              <IconButton>
                <LocationOnOutlinedIcon sx={{ color: "white" }} />
              </IconButton>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" },
                  fontWeight: "200",
                  lineHeight: { xs: "10px", sm: "27px" },
                  verticalAlign: "bottom",

                  letterSpacing: "0%",
                  fontFamily: "Nunito",
                }}>
                New York, NY
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
