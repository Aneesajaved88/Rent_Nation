import { Box, IconButton, Typography } from "@mui/material";
import BeachesImg1 from "@/_assets/pngs/image.png";
import BeachesImg2 from "@/_assets/pngs/Rectangle 22939 (3).png";
import BeachesImg3 from "@/_assets/pngs/Rectangle 22939 (2).png";
import Image from "next/image";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export const Beaches = () => {
  // const CardImage = [
  //   {
  //     image: BeachesImg1,
  //   },
  //   {
  //     image: BeachesImg2,
  //   },
  //   {
  //     image: BeachesImg3,
  //   },
  // ];
  return (
    <>
      <Box
        sx={{
          width: "100vw",
          // position: "absolute",
          maxWidth: "1400px",
          height: "auto",
          // top: { xs: 2800, sm: 2900, md: 2980 },
          // background: "green",
          // padding: "50px",
          marginTop: { xs: "40px", sm: "60px" },
        }}>
        <Box
          sx={{
            width: "100%",
            // padding: { xs: "10px", sm: "20px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // bgcolor: "#cc99",
          }}>
          <Box
            sx={{
              width: "100%",
              padding: { xs: "10px", sm: "20px", md: "30px" },
            }}>
            <Typography
              sx={{
                padding: "10px",
                fontSize: { xs: "20px", sm: "23px", md: "28px", lg: "32px" },
                // lineHeight: { xs: "10px", sm: "27px" },
                // fontSize: "32px",
                lineHeight: "100%",
                fontWeight: "700",
                verticalAlign: "bottom",
                letterSpacing: "0.2px",
                fontFamily: "Nunito",
              }}>
              Get Cars, Beaches and Kayaks on Rent
            </Typography>
            <Typography
              sx={{
                width: "100%",
                padding: "10px",
                fontSize: { xs: "12px", sm: "12px", md: "17px", lg: "18px" },
                // lineHeight: { xs: "10px", sm: "27px" }
                lineHeight: 1.7,
                fontWeight: "200",
                verticalAlign: "bottom",
                letterSpacing: "0%",
                fontFamily: "Nunito",
              }}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat Vestib ulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },

              justifyContent: "space-evenly",
              alignItems: "center",
            }}>
            <Box
              sx={{
                width: "100%",
                padding: { sm: "20px" },
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },

                justifyContent: "space-evenly",
                alignItems: "center",
              }}>
              <Box
                sx={{
                  // padding: "10px",
                  position: "relative",
                  // width: "100%",
                  padding: { xs: " 20px 0", sm: "20px ", lg: "20px" },
                  display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  flexDirection: { xs: "column" },
                }}>
                <Box
                  sx={{
                    // padding: "50px",
                    position: "relative",
                    width: {
                      xs: "300px",
                      sm: "150px",
                      md: "250px",
                      lg: "350px",
                    },
                    height: { xs: "230px", sm: "180px", md: "240px" },
                    overflow: "hidden",
                  }}>
                  <Image src={BeachesImg1} height="280" />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      opacity: 0.5,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                    // height: "230px",
                    position: "absolute",
                    top: { xs: 150, sm: 70, md: 120, lg: 160 },
                  }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                    }}>
                    <Typography
                      sx={{
                        padding: " 10px ",
                        fontSize: {
                          xs: "20px",
                          sm: "18px",
                          md: "20px",
                          lg: "28px",
                        },

                        lineHeight: "100%",
                        fontWeight: "700",
                        verticalAlign: "bottom",
                        letterSpacing: "0.2px",
                        fontFamily: "Nunito",
                      }}>
                      Golf cart{" "}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: {
                        xs: "300px",
                        sm: "180px",
                        md: "230px",
                        lg: "350px",
                      },
                      // width: "100%",
                      // height: { sm: "100px", lg: "230px" },
                      display: "flex",
                      flexDirection: {
                        sm: "column",
                        md: "row",
                      },
                      justifyContent: {
                        xs: "space-between",
                        sm: "center",
                        md: "space-between",
                        // lg: "space-around",
                      },
                      alignItems: { sm: "start", md: "center", lg: "start" },
                    }}>
                    <Box
                      sx={{
                        // width: "300px",
                        display: "flex",
                        // gap:"0"
                        // padding: "10px",
                        justifyContent: { sm: "start", md: "center" },
                        alignItems: "center",
                      }}>
                      <IconButton>
                        <FmdGoodOutlinedIcon sx={{ color: "white" }} />
                      </IconButton>
                      <Typography
                        sx={{
                          // padding: "10px",
                          fontSize: {
                            xs: "16px",
                            sm: "10px",
                            md: "12px",
                            lg: "18px",
                          },

                          lineHeight: "100%",
                          fontWeight: "100",
                          verticalAlign: "bottom",
                          letterSpacing: "0%",
                          fontFamily: "Nunito",
                        }}>
                        Washington
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        padding: { xs: "10px", sm: "15px", md: "10px" },
                        fontSize: {
                          xs: "16px",
                          sm: "10px",
                          md: "12px",
                          lg: "18px",
                        },

                        // lineHeight: 1.7,
                        fontWeight: "400",
                        verticalAlign: "bottom",
                        letterSpacing: "0%",
                        fontFamily: "Nunito",
                      }}>
                      250+ listings
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  // padding: "10px",
                  position: "relative",
                  // width: "100%",
                  padding: { xs: " 20px 0", sm: "20px ", lg: "20px" },
                  display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  flexDirection: { xs: "column" },
                }}>
                <Box
                  sx={{
                    // padding: "50px",
                    position: "relative",
                    width: {
                      xs: "300px",
                      sm: "150px",
                      md: "250px",
                      lg: "350px",
                    },
                    height: { xs: "230px", sm: "180px", md: "240px" },
                    overflow: "hidden",
                  }}>
                  <Image src={BeachesImg2} height="280" />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      opacity: 0.5,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                    // height: "230px",
                    position: "absolute",
                    top: { xs: 150, sm: 70, md: 120, lg: 160 },
                  }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                    }}>
                    <Typography
                      sx={{
                        padding: " 10px ",
                        fontSize: {
                          xs: "20px",
                          sm: "14px",
                          md: "20px",
                          lg: "28px",
                        },

                        lineHeight: "100%",
                        fontWeight: "700",
                        verticalAlign: "bottom",
                        letterSpacing: "0.2px",
                        fontFamily: "Nunito",
                      }}>
                      Beache Supplies
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: {
                        xs: "300px",
                        sm: "180px",
                        md: "230px",
                        lg: "350px",
                      },
                      // width: "100%",
                      // height: { sm: "100px", lg: "230px" },
                      display: "flex",
                      flexDirection: {
                        sm: "column",
                        md: "row",
                      },
                      justifyContent: {
                        xs: "space-between",
                        sm: "center",
                        md: "space-between",
                        // lg: "space-around",
                      },
                      alignItems: { sm: "start", md: "center", lg: "start" },
                    }}>
                    <Box
                      sx={{
                        // width: "300px",
                        display: "flex",
                        // gap:"0"
                        // padding: "10px",
                        justifyContent: { sm: "start", md: "center" },
                        alignItems: "center",
                      }}>
                      <IconButton>
                        <FmdGoodOutlinedIcon sx={{ color: "white" }} />
                      </IconButton>
                      <Typography
                        sx={{
                          // padding: "10px",
                          fontSize: {
                            xs: "16px",
                            sm: "10px",
                            md: "12px",
                            lg: "18px",
                          },

                          lineHeight: "100%",
                          fontWeight: "100",
                          verticalAlign: "bottom",
                          letterSpacing: "0%",
                          fontFamily: "Nunito",
                        }}>
                        Washington
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        padding: { xs: "10px", sm: "15px", md: "10px" },
                        fontSize: {
                          xs: "16px",
                          sm: "10px",
                          md: "12px",
                          lg: "18px",
                        },

                        // lineHeight: 1.7,
                        fontWeight: "400",
                        verticalAlign: "bottom",
                        letterSpacing: "0%",
                        fontFamily: "Nunito",
                      }}>
                      250+ listings
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  // padding: "10px",
                  position: "relative",
                  // width: "100%",
                  padding: { xs: " 20px 0", sm: "20px ", lg: "20px" },
                  display: "flex",
                  // justifyContent: "center",
                  // alignItems: "center",
                  flexDirection: { xs: "column" },
                }}>
                <Box
                  sx={{
                    // padding: "50px",
                    position: "relative",
                    width: {
                      xs: "300px",
                      sm: "150px",
                      md: "250px",
                      lg: "350px",
                    },
                    height: { xs: "230px", sm: "180px", md: "240px" },
                    overflow: "hidden",
                  }}>
                  <Image src={BeachesImg3} height="280" />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "black",
                      opacity: 0.5,
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "80%",
                    // height: "230px",
                    position: "absolute",
                    top: { xs: 150, sm: 70, md: 120, lg: 160 },
                  }}>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                    }}>
                    <Typography
                      sx={{
                        padding: " 10px ",
                        fontSize: {
                          xs: "20px",
                          sm: "18px",
                          md: "20px",
                          lg: "28px",
                        },

                        lineHeight: "100%",
                        fontWeight: "700",
                        verticalAlign: "bottom",
                        letterSpacing: "0.2px",
                        fontFamily: "Nunito",
                      }}>
                      Golf cart{" "}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      width: {
                        xs: "300px",
                        sm: "180px",
                        md: "230px",
                        lg: "350px",
                      },
                      // width: "100%",
                      // height: { sm: "100px", lg: "230px" },
                      display: "flex",
                      flexDirection: {
                        sm: "column",
                        md: "row",
                      },
                      justifyContent: {
                        xs: "space-between",
                        sm: "center",
                        md: "space-between",
                        // lg: "space-around",
                      },
                      alignItems: { sm: "start", md: "center", lg: "start" },
                    }}>
                    <Box
                      sx={{
                        // width: "300px",
                        display: "flex",
                        // gap:"0"
                        // padding: "10px",
                        justifyContent: { sm: "start", md: "center" },
                        alignItems: "center",
                      }}>
                      <IconButton>
                        <FmdGoodOutlinedIcon sx={{ color: "white" }} />
                      </IconButton>
                      <Typography
                        sx={{
                          // padding: "10px",
                          fontSize: {
                            xs: "16px",
                            sm: "10px",
                            md: "12px",
                            lg: "18px",
                          },

                          lineHeight: "100%",
                          fontWeight: "100",
                          verticalAlign: "bottom",
                          letterSpacing: "0%",
                          fontFamily: "Nunito",
                        }}>
                        Washington
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        padding: { xs: "10px", sm: "15px", md: "10px" },
                        fontSize: {
                          xs: "16px",
                          sm: "10px",
                          md: "12px",
                          lg: "18px",
                        },

                        // lineHeight: 1.7,
                        fontWeight: "400",
                        verticalAlign: "bottom",
                        letterSpacing: "0%",
                        fontFamily: "Nunito",
                      }}>
                      250+ listings
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
