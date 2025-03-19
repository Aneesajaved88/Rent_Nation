"use client";

import * as React from "react";
import SimpleListMenu from "@/_components/Dropdown";
import { useState } from "react";
import { SearchInput } from "@/_components/ButtonSearchInput";
import { Footer } from "@/_components/Footer";
import Navbar from "@/_components/Navbar";
import { Box, IconButton, Button, Typography } from "@mui/material";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import left from "@/_assets/pngs/Ellipse 274.png";
import Right from "@/_assets/pngs/Ellipse 275.png";
import C1Img1 from "@/_assets/pngs/Rectangle 22928 (3).png";
import C1Img2 from "@/_assets/pngs/Rectangle 22928 (4).png";
import C1Img3 from "@/_assets/pngs/Rectangle 22928 (5).png";
import C1Img4 from "@/_assets/pngs/Rectangle 22928 (6).png";
import C1Img5 from "@/_assets/pngs/Rectangle 22928 (7).png";
import C1Img6 from "@/_assets/pngs/Rectangle 22928 (10).png";

const ListingSection = () => {
  const [open, setOpen] = React.useState(false);
  const [isopen, setIsOpen] = React.useState(false);

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
    {
      image: C1Img5,
    },
    {
      image: C1Img6,
    },
  ];

  // console.log(open);

  return (
    <>
      {isopen && (
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100vw",
            height: "604px",
            // backdropFilter: isOpen && "blur(5)",
            bgcolor: "rgba(0, 0, 0, 0.042)",
            backdropFilter: isopen && "blur(4px)",

            position: "absolute",

            // top: 100,
            zIndex: 4,
          }}></Box>
      )}
      <Box
        sx={{
          width: "100%",
          margin: { xl: "0 auto" },
          maxWidth: "1400px",
        }}>
        <Navbar isOpen={isopen} setIsopen={setIsOpen} />
        <Box
          sx={{
            width: "100vw",
            maxWidth: "1400px",
            // padding: {"50px 30px"},
            padding: { xs: "10px", lg: " 50px 40px  " },
            // bgcolor: "#ccc",
          }}>
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
                xl: "none",
                // overflow: "hidden",
              },
            }}>
            <Image
              src={left}
              alt="Ellipse"
              style={{
                width: "250px",
                height: "500px",
                position: "absolute",
                top: 800,
                left: -100,
                zIndex: "-100",
                transform: " rotate(4deg)",
              }}
            />
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
                xl: "none",
              },
            }}>
            <Image
              src={Right}
              alt="Ellipse"
              style={{
                width: "180px",
                height: "400px",
                position: "absolute",
                top: 1550,
                right: 10,
                zIndex: "-100",
                transform: " rotate(0deg)",
                // maxWidth: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "1400px",
              // padding: "20px",
              // bgcolor: "#ccc",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: { xs: "center", md: "flex-start" },
              flexDirection: { xs: "column", md: "row" },
            }}>
            {/* ========================================================================================================================================== */}
            <Box
              sx={{
                // width: { xs: "100%", md: "195px" },
                borderRadius: "5px",
                height: open && { xs: "370px", sm: "300px", md: "290px" },
                margin: { xs: "20px", sm: "30px", md: "0" },
                // position: "absolute",
                // top: "100px",
                // zIndex: open ? "1222" : "1",

                // zIndex: "30",
                // marginBottom: { xs: "200px" },
                bgcolor: "#272626",
                // padding: " 0 0 12px 0 ",
              }}>
              <Typography
                sx={{
                  borderRadius: "5px ",
                  // width: "190px",
                  height: "64px",
                  bgcolor: "#1E1E1E",
                  padding: "20px",

                  // margin: "2px 0 0 1px",
                  fontFamily: "Nunito",
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "23px",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                  textTransform: "capitalize",
                  textAlign: "center",
                  color: "#ccc",
                }}>
                Filters
              </Typography>
              <SimpleListMenu open={open} setOpen={setOpen} />
            </Box>
            {/* ========================================================================================================================================== */}
            <Box
              sx={{
                // width: { lg: "90%" },
                // width: "1000px",

                // width: 1200,
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: { xs: "center", md: "center" },
                flexDirection: "column",
                // flexWrap: "nowrap",
                // padding: " 10px",
              }}>
              {/* ======================button============== */}
              <Box
                sx={{
                  width: {
                    xs: "300px",
                    sm: "600px",
                    md: "690px",
                    lg: "1055px",
                  },
                  height: { xs: 250, sm: 150, lg: 103 },
                  borderRadius: "10px",
                  borderWidth: "1px",
                  bgcolor: "#1E1E1E",
                  display: "flex",
                  // margin: "10px 0",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection: { xs: "column", lg: "row" },
                  // padding: { xs: "20px" },
                }}>
                <Box>
                  <Typography
                    padding="20px"
                    sx={{
                      fontFamily: "Nunito",
                      fontWeight: 700,
                      fontSize: { xs: "20px", lg: "25px" },
                      lineHeight: "23px",
                      letterSpacing: "0%",
                      verticalAlign: "middle",
                      textTransform: "capitalize",
                      color: "#FFFFFF",
                    }}>
                    Beach Supplies for Rent
                  </Typography>
                </Box>
                <SearchInput />
              </Box>
              {/* ============================cards===================================== */}

              <Box
                sx={{
                  width: {
                    xs: "305px",
                    sm: "630px",
                    md: "690px",
                    lg: "1043px",
                  },
                  height: "auto",
                  // borderRadius: "10px",
                  // borderWidth: "1px",
                  // bgcolor: "#1E1E1E",

                  display: "flex",
                  flexWrap: "wrap",
                  // padding: "50px",
                  justifyContent: { xs: "space-around" },
                  alignItems: "center",
                  // flexDirection: "row",
                  // gap: "1px",
                  margin: "10px 0",
                }}>
                {CardsData.map((items) => {
                  return (
                    <>
                      <Box
                        sx={{
                          width: {
                            xs: "305px",
                            sm: "300",
                            md: "690px",
                            lg: "1044px",
                          },
                          // height: "230px",
                          height: { md: "230px", lg: "230px" },
                          borderRadius: "10px",
                          margin: { xs: " 10px 0", lg: "10px 0" },
                          bgcolor: "#1E1E1E",
                          display: "flex",
                          // flexWrap: "wrap",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          flexDirection: { xs: "column", md: "row" },
                          // flexDirection: "colu
                          // mn",
                        }}>
                        {/* ========================Image---------------------------- */}
                        <Box
                          sx={{
                            width: { xs: "305px", sm: "300px", lg: "305px" },
                            height: { xs: "230px", md: "400px", lg: "230px" },
                            borderRadius: "10px",
                          }}>
                          <Image
                            src={items.image}
                            style={{
                              width: "305px",
                              height: "230px",
                              borderRadius: "10px",
                            }}
                          />
                        </Box>
                        {/* ---------------------text------------------- */}
                        <Box
                          sx={{
                            display: "flex",
                            // padding: "50px",
                            justifyContent: { xs: "flex-start", md: "center" },
                            alignItems: "start",
                            flexDirection: { xs: "column", lg: "row" },
                          }}>
                          <Box
                            sx={{
                              width: { xs: "290px", md: "380px", lg: "520px" },

                              height: { lg: "180px" },
                              margin: "10px",
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: {
                                xs: "space-between",
                                md: "space-evenly",
                                lg: "space-between",
                              },
                              alignItems: "flex-start",
                            }}>
                            <Box color="white">
                              <Typography
                                sx={{
                                  padding: {
                                    xs: "10px",
                                    md: "5px 10px",
                                    lg: "10px",
                                  },

                                  fontSize: "18px",
                                  lineHeight: "100%",
                                  fontWeight: "700",
                                  verticalAlign: "bottom",
                                  letterSpacing: "0.2px",
                                  fontFamily: "Nunito",
                                }}>
                                beach Supplies
                              </Typography>
                              <Typography
                                sx={{
                                  padding: {
                                    xs: "10px",
                                    md: "5px 10px",
                                    lg: "10px",
                                  },
                                  fontSize: " 14px",
                                  lineHeight: "20px",
                                  fontWeight: "400px",
                                  // verticalAlign: "middle",
                                  letterSpacing: "2",
                                  fontFamily: "Nunito",
                                }}>
                                The beach is a stunning natural landscape where
                                the land gently meets the vast expanse of
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                width: { xs: "300px", md: "380px" },
                                display: "flex",
                                justifyContent: {
                                  xs: "flex-start",
                                  // md: "space-around",
                                },
                                gap: "20px",
                                alignItems: "center",
                                color: "#ccc",
                              }}>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-start",
                                  alignItems: "center",
                                }}>
                                <IconButton>
                                  <FmdGoodOutlinedIcon
                                    sx={{ color: "#FFAE1B" }}
                                  />
                                </IconButton>
                                <Typography
                                  sx={{
                                    padding: {
                                      xs: "10px 5px",
                                      md: "5px ",
                                      lg: "10px",
                                    },
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

                              <Typography
                                sx={{
                                  padding: {
                                    xs: "10px 0",
                                    md: "5px 10px",
                                    lg: "10px",
                                  },
                                  fontSize: {
                                    xs: "10px",
                                    md: "12px",
                                    lg: "13px",
                                  },
                                  lineHeight: "100%",
                                  fontWeight: "100",
                                  textAlign: "right",
                                  verticalAlign: "bottom",
                                  letterSpacing: "0.2px",
                                  color: " #979696",
                                  fontFamily: "Nunito",
                                }}>
                                Close to abc and abc and abc
                              </Typography>
                            </Box>
                            <Box
                              sx={{
                                display: "flex",
                                // width: "281px",
                                justifyContent: "space-between",
                                alignItems: "center",
                                padding: {
                                  xs: " 10px ",
                                  md: "5px 10px",
                                  lg: "10px",
                                },
                              }}>
                              <Button
                                variant="outlined"
                                color=" #FFAE1B"
                                sx={{
                                  padding: {
                                    xs: "10px",
                                    md: "5px 10px",
                                    lg: "10px",
                                  },
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
                              {/* --------------------- */}

                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  color: "#6D737A",
                                }}>
                                <IconButton>
                                  <ShareOutlinedIcon
                                    sx={{ color: "#6D737A" }}
                                  />
                                </IconButton>
                                <IconButton>
                                  <VisibilityOutlinedIcon
                                    sx={{ color: "#6D737A" }}
                                  />
                                </IconButton>
                                <Typography
                                  sx={{
                                    padding: {
                                      xs: "10px",
                                      md: "5px 10px",
                                      lg: "10px",
                                    },
                                    fontSize: "14px",
                                    lineHeight: "100%",
                                    fontWeight: "100",
                                    verticalAlign: "bottom",
                                    letterSpacing: "0.2px",
                                    fontFamily: "Nunito",
                                    color: "#6D737A",
                                  }}>
                                  569
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          {/* -------------------------heart and 50$/day-------------------- */}
                          <Box
                            sx={{
                              width: { xs: "200px", md: "180px", lg: "200px" },

                              height: { lg: "100px" },
                              // margin: { xs: "0", lg: "10px" },
                              display: "flex",
                              // background: "green",
                              flexDirection: { xs: "row", lg: "column" },
                              justifyContent: {
                                xs: "flex-start",
                                md: "space-evenly",
                              },
                              alignItems: { xs: "flex-start", md: "flex-end" },
                              padding: { xs: "10px", md: "0", lg: "10px" },
                            }}>
                            <IconButton color="#E0E0E0">
                              <FavoriteBorderOutlinedIcon
                                sx={{ color: "#E0E0E0" }}
                              />
                            </IconButton>
                            <Typography
                              sx={{
                                padding: {
                                  xs: "10px",
                                  md: "5px 10px",
                                  lg: "10px",
                                },
                                fontSize: "20px",
                                lineHeight: "100%",
                                fontWeight: "400",
                                verticalAlign: "bottom",
                                letterSpacing: "0.2px",
                                fontFamily: "Nunito",
                                color: "   #FFAE1B",
                                paddingRight: "20px",
                              }}>
                              50$/day
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default ListingSection;
