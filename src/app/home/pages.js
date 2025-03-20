"use client";
import Navbar from "@/_components/Navbar.js";

import { Box, Card } from "@mui/material";
import HeroSection from "./section/HeroSection";
import { Cards } from "./section/Cards";
import { Beaches } from "./section/Beaches";
import { ContantUs } from "./section/ContantUs";
// import { ListingSection } from "../pages/ListingSection.js/index.js";
import { Footer } from "@/_components/Footer";
import { useState } from "react";
import PreviewListing from "../listingPreview/page";

const HomePage = () => {
  const [isOpen, setIsopen] = useState(false);
  // console.log(isOpen);

  return (
    <>
      {isOpen && (
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            width: "100vw",
            height: "604px",
            // backdropFilter: isOpen && "blur(5)",
            bgcolor: "rgba(0, 0, 0, 0.042)",
            backdropFilter: isOpen && "blur(4px)",

            position: "absolute",

            // top: 100,
            zIndex: 4,
          }}></Box>
      )}

      <Box
        component="section"
        sx={{
          width: "100%",
          // width: "100vw",
          height: { xs: "500px", sm: "500px", md: "550px", lg: "604px" },
          // height: "604px",
          // margin: "0 auto",

          backgroundImage: `url(./pngs/10631d4b3c9028b02ba56071be2727fd.png)`,
          backgroundSize: "cover",
          backgroundPosition: "100%",
          backgroundRepeat: "no-repeat",
          color: "white",
          position: "relative",
        }}>
        <Box
          sx={{
            width: "100%",
            // height: "604px",
            height: { xs: "500px", sm: "500px", md: "550px", lg: "604px" },
            background: "rgba(0, 0, 0, 0.542)",
          }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "1400px",
              // display: "contents",
              margin: { xl: "0 auto" },
              // height: "100vh",

              // flexDirection: "column",
            }}>
            {/* <PreviewListing /> */}
            <Navbar setIsopen={setIsopen} isOpen={isOpen} />
            <HeroSection />
            <Cards />
            <Beaches />
            <ContantUs />

            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
