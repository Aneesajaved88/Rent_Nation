"use client";
import { Box, IconButton, Typography } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";
import logo from "@/_assets/pngs/logo.png";

const quickLinks = ["Cars for rent", "Beach for rent", "Kayaks for rent"];
const menehariyaLinks = [
  "Cars for rent",
  "Beach for rent",
  "Kayaks for rent",
  "lorem",
];

const trendingSearch = [
  "Cars for rent",
  "Beach for rent",
  "Kayaks for rent",
  "rent home",
];
const socialIcons = [
  { icon: <FacebookOutlinedIcon />, key: "facebook" },
  { icon: <TwitterIcon />, key: "twitter" },
  { icon: <CameraAltIcon />, key: "camera" },
];

const LinkSection = ({ title, links }) => (
  <Box
    sx={{
      width: { xs: "120px", sm: "220px" },
      height: "auto",
      display: "flex",

      flexDirection: "column",
      gap: "30px",
    }}>
    <Typography
      sx={{
        color: "#F18805",
        fontSize: { xs: "12px", sm: "12px", md: "16px", lg: "18px" },
        fontFamily: "Nunito",
        fontWeight: "700",
        lineHeight: { xs: "2px", sm: "100%" },
        verticalAlign: "bottom",
        letterSpacing: "0%",
        textTransform: "uppercase",
      }}>
      {title}
    </Typography>
    <Box
      component="ul"
      sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {links.map((link, index) => (
        <Typography
          key={index}
          sx={{
            color: "white",
            fontSize: {
              xs: "12px",
              sm: "12px",
              md: "16px",
              lg: "18px",
            },
            fontFamily: "Nunito",
            fontWeight: { sm: "100" },
            // lineHeight: { xs: "2px", sm: "2px" },
            // verticalAlign: "bottom",
            // letterSpacing: "0%",
          }}>
          {link}
        </Typography>
      ))}
    </Box>
  </Box>
);

export const Footer = () => {
  return (
    <Box
      component="footer"
      position="absolute"
      maxWidth="1440px"
      width="100vw"
      sx={{
        bgcolor: { xs: "rgb(33,33,33)", xl: "transparent" },
        height: "auto",

        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "space-evenly" },
        alignItems: { xs: "center", sm: "start", lg: "center" },
      }}>
      <Box
        sx={{
          padding: "20px 25px 0 ",

          width: "100%",
          display: "flex",
          flexWrap: { xs: "wrap" },
          flexDirection: {
            xs: "column",
            md: "column",
            lg: "row",
          },
          // bgcolor: "gray",
          justifyContent: {
            xs: "center",
            sm: "center",
            lg: "space-between",
          },
          alignItems: {
            xs: "center",
            // sm: "center",
            sm: "start",
            lg: "start",
          },
          gap: { xs: "30px" },
        }}>
        <Box
          sx={{
            width: { xs: "200px", md: "350px" },
            padding: { md: "30px  30px 0px", lg: "20px" },
            display: "flex",
            flexDirection: { xs: "column", sm: "column" },
            justifyContent: {
              xs: "center",
              // sm: "flex-start",
              lg: "space-between",
            },
            alignItems: {
              xs: "center",
              // sm: "space-between",
              sm: "start",
            },

            gap: { xs: "30px" },
          }}>
          <Image src={logo} alt="Logo" width={150} height={40} />
          <Typography
            sx={{
              width: { xs: "200px", sm: "350px", md: "500px", lg: "350px" },
              fontSize: { xs: "10px", sm: "12px", md: "16px", lg: "18px" },
              fontFamily: "Nunito",
              fontWeight: { xs: "100" },
              // lineHeight: { xs: "40px", sm: "72px" },
              verticalAlign: "bottom",
              letterSpacing: "0%",
              // textAlign: "center",
              color: "#ccc",
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            viverra efficitur convallis.
          </Typography>
        </Box>
        <Box
          sx={{
            width: { sm: "500px", md: "800px" },

            display: "flex",

            flexWrap: { xs: "wrap", sm: "nowrap" },
            flexDirection: { xs: "row", sm: "row" },
            justifyContent: { xs: "center", md: "space-evenly" },
            alignItems: { xs: "start", md: "start", lg: "flex-start" },
            gap: { xs: "20px", sm: "0px" },
            padding: { md: "20px 20px 0 20px " },
          }}>
          <LinkSection title="Quick Links" links={quickLinks} />
          <LinkSection title="Menehariya" links={menehariyaLinks} />
          <LinkSection title="Trending Search" links={trendingSearch} />
          <Box
            sx={{
              width: "120px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}>
            <Typography
              sx={{
                color: "#F18805",
                fontSize: { xs: "12px", sm: "16px", lg: "15px" },
                fontWeight: "700",
                textTransform: "uppercase",
                fontFamily: "Nunito",
              }}>
              Social Media
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: { xs: "2px", sm: "10px" },
                fontSize: { xs: "12px", lg: "16px" },
              }}>
              {socialIcons.map(({ icon, key }) => (
                <IconButton
                  key={key}
                  sx={{ bgcolor: "#ccc", borderRadius: "50%" }}>
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ color: "#ccc", padding: "10px", fontSize: "16px" }}>
        © Rentnation 2023
      </Typography>
    </Box>
  );
};
