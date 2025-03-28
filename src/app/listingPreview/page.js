"use client";
import { Footer } from "@/_components/Footer";
import Navbar from "@/_components/Navbar";
import { useState } from "react";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const { Box, Typography, IconButton } = require("@mui/material");
import Slider from "react-slick";
import baseUrl from "@/config";
import Tabs from "@/_components/tab";
import TabsLink from "@/_components/tab";
import BookingCard from "@/_components/BookingCard";

const PreviewListing = () => {
  const [isopen, setIsOpen] = useState(false);
  const images = [
    "/pngs/Rectangle 22928 (4).png",
    "/pngs/Rectangle 22928 (3).png",
    "/pngs/Rectangle 22928 (5).png",
    "/pngs/Rectangle 22928 (6).png",
    "/pngs/Rectangle 22928 (8).png",
    "/pngs/Rectangle 22928 (7).png",
  ];
  const settings = {
    customPaging: function (i) {
      return (
        <a sx={{}}>
          <img
            src={images[i]}
            alt={`Thumbnail ${i + 1}`}
            style={{
              width: "100px",
              height: "50px",
              objectFit: "contain",
              borderRadius: "5px",
            }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      {isopen && (
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100vw",
            height: "604px",
            bgcolor: "rgba(0, 0, 0, 0.042)",
            backdropFilter: isopen && "blur(4px)",
            position: "absolute",
            zIndex: 4,
          }}></Box>
      )}
      <Box
        sx={{
          width: "100%",
          margin: { xl: "0 auto" },
          maxWidth: "1400px",
          position: "relative",
        }}>
        <Navbar isOpen={isopen} setIsopen={setIsOpen} />
        <Box
          sx={{
            width: "100vw",
            maxWidth: "1400px",
            height: "auto",
            padding: { xs: "10px", md: "30px" },
            // bgcolor: "#ccc",
          }}>
          <Box
            sx={{
              width: { xs: "100%", md: "100%" },
              height: "auto",
              display: "flex",
              justifyContent: { xs: "center", md: "space-around" },
              alignItems: { xs: "center", md: "flex-start" },
              flexDirection: { xs: "column", md: "row" },
            }}>
            {/* ==========text  image--------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Box
              sx={{
                width: { xs: "300px", sm: "600px", md: "540px", lg: "756px" },

                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "space-evenly",
                  lg: "space-around",
                },
                flexDirection: { xs: "column", md: "column" },
                alignItems: { xs: "center", md: "flex-start" },
                // gap: { md: "20px" },
              }}>
              {/* ===================== image */}
              <Box
                sx={{
                  width: { xs: "300px", sm: "500px", md: "500px", lg: "758px" },
                  height: {
                    xs: "370px",
                    sm: "430px",
                    md: "450px",
                    lg: "450px",
                  },
                }}>
                <div className="slider-container">
                  <Slider {...settings}>
                    {images.map((src, index) => (
                      <div key={index} className="slider-image">
                        <img
                          src={src}
                          alt={`Slide ${index + 1}`}
                          style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "350px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  flexDirection: { xs: "column" },
                  justifyContent: { xs: "center", md: "space-between" },
                  alignItems: { xs: "center", md: "flex-start" },
                  gap: { xs: "20px" },
                  // mt: { xs: 21, sm: 21 },
                }}>
                <Typography
                  sx={{
                    letterSpacing: "1px",
                    fontFamily: "Nunito",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    fontWeight: "700",
                    lineHeight: "100%",
                    verticalAlign: "middle",
                  }}>
                  Beache Supplies
                </Typography>
                <Box
                  sx={{
                    // width: "500px",
                    height: "auto",
                    display: "flex",
                    justifyContent: { xs: "space-evenly", md: "space-between" },
                    // flexDirection: { md: "column" },
                    alignItems: { xs: "center", md: "flex-start" },
                    gap: { xs: "14px", md: "20px" },
                  }}>
                  <IconButton sx={{ padding: 0 }}>
                    <LocationOnOutlinedIcon
                      sx={{
                        color: "#FFAE1B",
                      }}
                    />
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: "Nunito",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "400",
                      lineHeight: "100%",
                      verticalAlign: "middle",
                    }}>
                    Alibey island
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Nunito",
                      fontSize: { xs: "12px", sm: "14px", md: "16px" },
                      fontWeight: "100",
                      lineHeight: "100%",
                      verticalAlign: "middle",
                      color: "#949494",
                    }}>
                    Close to abc and abc and abc
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  // width: "800px",
                  height: "auto",
                  display: "flex",
                  justifyContent: { xs: "center", md: "space-around" },
                  // flexDirection: { md: "column" },
                  alignItems: { xs: "center", md: "flex-start" },
                }}>
                <TabsLink />
              </Box>
            </Box>
            {/* ==========date --------------------------------------------------------------------------------------------------------------------------------------------*/}
            <Box sx={{ width: { md: 300, lg: 432 }, height: "814px" }}>
              <BookingCard />
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default PreviewListing;
