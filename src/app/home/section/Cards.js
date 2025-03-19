import { Box } from "@mui/material";
import { Card2 } from "./_cards/Card2";
import { Card3 } from "./_cards/Card3";
import { Card1 } from "./_cards/Card1";
import { Card4 } from "./_cards/Card4";
import Image from "next/image";
import left from "@/_assets/pngs/Ellipse 274.png";
import Right from "@/_assets/pngs/Ellipse 275.png";

export const Cards = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          maxWidth: "1400px",
          width: { lg: "100vw", xl: "100vw" },
          // margin: "0 auto",
          position: "relative",
          height: "auto",
          // top: "600px",
          // marginTop: { xs: "200px", sm: "100px", md: "130px", lg: "200px" },
          padding: { xs: "20px 0", sm: "30px", md: " 20px" },
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
              top: 1000,
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
              top: 1650,
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
            padding: { xs: "0px", lg: " 20px" },
            position: "absolute",
            display: "contents",
            left: 0,
          }}>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </Box>
      </Box>
    </>
  );
};
