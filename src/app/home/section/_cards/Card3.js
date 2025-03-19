"use client";
import { Box, IconButton, Button, Typography } from "@mui/material";
import Image from "next/image";

import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import C1Img1 from "@/_assets/pngs/Rectangle 22928 (7).png";
import C1Img2 from "@/_assets/pngs/Rectangle 22928 (8).png";
import C1Img3 from "@/_assets/pngs/Rectangle 22928 (9).png";
import C1Img4 from "@/_assets/pngs/Rectangle 22928 (10).png";

export const Card3 = () => {
  // console.log(Rectangle1);

  const CardsData = [
    {
      image: C1Img1,
    },
    {
      image: C1Img2,
    },
    {
      image: C1Img3,
    },
    {
      image: C1Img4,
    },
  ];

  return (
    <>
      <Box sx={{ width: "100%", maxWidth: "1400px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-around", sm: "space-between" },
            gap: { xs: "20px" },
            alignItems: "center",
            padding: { sm: "20px" },
            marginTop: "40px",
          }}>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "25px", md: "30px", lg: "32px" },
              lineHeight: { xs: "10px", sm: "27px" },
              fontWeight: { xs: "700" },
              verticalAlign: "bottom",
              letterSpacing: "0%",
              fontFamily: "Nunito",
            }}>
            Featured Golf Cart for Rent
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", sm: "25px", md: "30px", lg: "32px" },
              lineHeight: { xs: "10px", sm: "27px" },
              fontWeight: { xs: "700" },
              verticalAlign: "bottom",
              letterSpacing: "0%",
              fontFamily: "Nunito",
            }}>
            See All
          </Typography>
        </Box>
        {/* ------------------------------------------------------------------------------------ */}
        <Box
          sx={{
            width: "100%",
            height: "480px",
            padding: "10px",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            overflowX: "auto",
            gap: { xs: "30px", lg: "10px" },
            // padding: "20px",
            // whiteSpace: "nowrap",
            // scrollbarWidth: "none", // Firefox
            // msOverflowStyle: "none", // Internet Explorer
          }}>
          {CardsData.map((items, index) => {
            return (
              <div key={index}>
                <Box
                  sx={{
                    position: "relative",
                    width: "300px",
                    height: "426px",
                    bgcolor: "rgb(39, 38, 38)",
                    borderRadius: "8px",
                  }}>
                  <Image
                    src={items.image}
                    alt="Rectangle1"
                    style={{ width: "300px", height: "230px" }}
                  />
                  <Box
                    sx={{
                      width: "300px",
                      position: "absolute",
                      top: 10,
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      gap: "100px",
                    }}>
                    <Button
                      variant="contained"
                      zindex="122"
                      sx={{
                        bgcolor: " #FFCE32",
                        // padding: "10px",
                        fontSize: "14px",
                        lineHeight: "100%",
                        fontWeight: "400",
                        textAlign: "right",
                        verticalAlign: "bottom",
                        letterSpacing: "0.2px",
                        color: " #002F34",
                        textTransform: "capitalize",
                        fontFamily: "Nunito",
                        padding: "6px 25px",
                      }}>
                      Featured
                    </Button>
                    <IconButton
                      sx={{
                        // position: "absolute",
                        // top: 170,
                        // left: 300,
                        bgcolor: " #282828",
                        padding: "10px",
                        "&:hover": {
                          bgcolor: "#505050", // Change color on hover
                        },
                      }}>
                      <FavoriteBorderOutlinedIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                  <Box color="white">
                    <Typography
                      sx={{
                        padding: "10px",
                        fontSize: "18px",
                        lineHeight: "100%",
                        fontWeight: "700",
                        verticalAlign: "bottom",
                        letterSpacing: "0.2px",
                        fontFamily: "Nunito",
                      }}>
                      Golf Cart
                    </Typography>
                    <Typography
                      sx={{
                        padding: "10px",
                        fontSize: "14px",
                        lineHeight: "20px",
                        fontWeight: "400px",
                        // verticalAlign: "middle",
                        letterSpacing: "0%",
                        fontFamily: "Nunito",
                      }}>
                      Lorem ipsum dolor sit amet consectetur. Consequat
                      tincidunt"
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "281px",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Box sx={{ display: "flex" }}>
                      <IconButton>
                        <FmdGoodOutlinedIcon sx={{ color: "white" }} />
                      </IconButton>
                      <Typography
                        sx={{
                          padding: "10px",
                          fontSize: "14px",
                          lineHeight: "100%",
                          fontWeight: "100",
                          verticalAlign: "bottom",
                          letterSpacing: "0.2px",
                          fontFamily: "Nunito",
                        }}>
                        Alibey island
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          padding: "10px",
                          fontSize: "14px",
                          lineHeight: "100%",
                          fontWeight: "100",
                          textAlign: "right",
                          verticalAlign: "bottom",
                          letterSpacing: "0.2px",
                          color: " #FFAE1B",
                          fontFamily: "Nunito",
                        }}>
                        $50/day
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      width: "281px",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                    <Box sx={{ display: "flex" }}>
                      <IconButton>
                        <ShareOutlinedIcon sx={{ color: "white" }} />
                      </IconButton>
                      <IconButton>
                        <VisibilityOutlinedIcon sx={{ color: "white" }} />
                      </IconButton>
                      <Typography
                        sx={{
                          padding: "10px",
                          fontSize: "14px",
                          lineHeight: "100%",
                          fontWeight: "100",
                          verticalAlign: "bottom",
                          letterSpacing: "0.2px",
                          fontFamily: "Nunito",
                        }}>
                        569
                      </Typography>
                    </Box>

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
                        View Details
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </div>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
