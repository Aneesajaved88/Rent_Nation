"use client";
import { Footer } from "@/_components/Footer";
import Navbar from "@/_components/Navbar";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import left from "@/_assets/pngs/Ellipse 274.png";
import Right from "@/_assets/pngs/Ellipse 275.png";

const About = () => {
  const [isopen, setIsOpen] = useState(false);
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
          position: "relative",
        }}>
        <Navbar isOpen={isopen} setIsopen={setIsOpen} />
        <Box
          sx={{
            width: "100vw",
            maxWidth: "1400px",
            padding: { xs: "0 10px", lg: " 50px 30px  " },
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
                top: 1250,
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

              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <Box
              sx={{
                width: { xs: "300px", sm: "580px", md: "800px", lg: "890px" },
                height: "auto",
                color: "#FFFFFF",
                margin: "20px",
              }}>
              <Typography
                sx={{
                  width: { xs: "300px", sm: 445 },
                  height: 50,
                  color: "#FFFFFF",
                  fontSize: {
                    xs: "28px",
                    sm: "25px",
                    md: "30px",
                    lg: "32.86px",
                  },
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  lineHeight: { xs: "20px", sm: "100%" },
                  verticalAlign: "bottom",
                  letterSpacing: "0%",
                }}>
                About Us
              </Typography>
              <Box sx={{ width: "100%", height: "auto" }}>
                <Typography
                  sx={{
                    width: "100%",
                    // height: 250,
                    color: "#FFFFFF",
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                    },
                    fontFamily: "Nunito",
                    fontWeight: "500",
                    lineHeight: { xs: "29px", sm: "36px" },
                    verticalAlign: "middle",
                    letterSpacing: "0.2px",
                  }}>
                  Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
                  blandit donec ipsum nam vel. Vulputate arcu augue vestibulum
                  interdum. Quam vitae ullamcorper risus nibh faucibus aliquam
                  adipiscing. Vitae ultrices accumsan nunc mattis sagittis vitae
                  egestas et duis. Libero pharetra vitae id feugiat et sed
                  ornare pellentesque non. Aliquam tortor viverra habitant erat
                  commodo odio. Leo nulla aliquam ullamcorper massa. Pretium in
                  risus vel ut nibh. Egestas neque elementum massa tincidunt
                  ipsum ut tempor bibendum duis. Lacus aliquam vitae vulputate
                  eget non fringilla. Sodales orci viverra quisque dictum diam.
                  Pharetra turpis cras tincidunt tortor mus mollis nunc proin.
                  Purus in donec at vulputate nisi habitant lectus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
                  blandit donec ipsum nam vel. Vulputate arcu augue vestibulum
                  interdum. Quam vitae ullamcorper risus nibh faucibus aliquam
                  adipiscing. Vitae ultrices accumsan nunc mattis sagittis vitae
                  egestas et duis. Libero pharetra vitae id feugiat et sed
                  ornare pellentesque non. Aliquam tortor viverra habitant erat
                  commodo odio. Leo nulla aliquam ullamcorper massa. Pretium in
                  risus vel ut nibh. Egestas neque elementum massa tincidunt
                  ipsum ut tempor bibendum duis. Lacus aliquam vitae vulputate
                  eget non fringilla. Sodales orci viverra quisque dictum diam.
                  Pharetra turpis cras tincidunt tortor mus mollis nunc proin.
                  Purus in donec at vulputate nisi habitant lectus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
                  blandit donec ipsum nam vel. Vulputate arcu augue vestibulum
                  interdum. Quam vitae ullamcorper risus nibh faucibus aliquam
                  adipiscing. Vitae ultrices accumsan nunc mattis sagittis vitae
                  egestas et duis. Libero pharetra vitae id feugiat et sed
                  ornare pellentesque non. Aliquam tortor viverra habitant erat
                  commodo odio. Leo nulla aliquam ullamcorper massa. Pretium in
                  risus vel ut nibh. Egestas neque elementum massa tincidunt
                  ipsum ut tempor bibendum duis. Lacus aliquam vitae vulputate
                  eget non fringilla. Sodales orci viverra quisque dictum diam.
                  Pharetra turpis cras tincidunt tortor mus mollis nunc proin.
                  Purus in donec at vulputate nisi habitant lectus.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur. Consequat tincidunt
                  blandit donec ipsum nam vel. Vulputate arcu augue vestibulum
                  interdum. Quam vitae ullamcorper risus nibh faucibus aliquam
                  adipiscing. Vitae ultrices accumsan nunc mattis sagittis vitae
                  egestas et duis. Libero pharetra vitae id feugiat et sed
                  ornare pellentesque non. Aliquam tortor viverra habitant erat
                  commodo odio. Leo nulla aliquam ullamcorper massa. Pretium in
                  risus vel ut nibh. Egestas neque elementum massa tincidunt
                  ipsum ut tempor bibendum duis. Lacus aliquam vitae vulputate
                  eget non fringilla. Sodales orci viverra quisque dictum diam.
                  Pharetra turpis cras tincidunt tortor mus mollis nunc proin.
                  Purus in donec at vulputate nisi habitant lectus.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
export default About;
