"use client";
import { Footer } from "@/_components/Footer";
import Navbar from "@/_components/Navbar";
import { useState } from "react";
import { Button, Box, Typography, Input } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import left from "@/_assets/pngs/Ellipse 274.png";

const Contact = () => {
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
        }}>
        <Navbar isOpen={isopen} setIsopen={setIsOpen} />
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
              top: 500,
              left: -30,
              zIndex: "-100",
              transform: " rotate(-20deg)",
            }}
          />
        </Box>
        <Box
          sx={{
            width: "100vw",
            maxWidth: "1400px",
            // padding: {"50px 30px"},
            padding: { xs: "10px", lg: " 50px 30px  " },
            // bgcolor: "#ccc",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}>
          <Box
            sx={{
              // width: { md: "800px" },
              height: "auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
            }}>
            <Box>
              <Typography
                sx={{
                  width: { xs: "300px", sm: 445 },
                  height: 80,
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
                  // padding: "30px",
                }}>
                Contact Us
              </Typography>
              <InputLabel
                htmlFor="component-simple"
                sx={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}>
                Name*
              </InputLabel>

              <TextField
                fullWidth
                // required
                type="text"
                placeholder="EX:Mark odama"
                margin="dense"
                // value={formData.name}
                // onChange={handleChange}
                sx={{
                  bgcolor: "#2B2B2B",
                  width: { xs: "290px", sm: "400px" },
                  borderRadius: 1,
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  fontSize: "16px",
                  "& .MuiOutlinedInput-input": {
                    color: "#667085",

                    padding: "8px 10px", // ✅ Inner padding
                  },
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              />

              <InputLabel
                htmlFor="component-simple"
                sx={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}>
                Email*
              </InputLabel>

              <TextField
                fullWidth
                placeholder="EX:Markoadama@gmail.com"
                type="email"
                // value={formData.name}
                // onChange={handleChange}

                margin="dense"
                sx={{
                  bgcolor: "#2B2B2B",
                  width: { xs: "290px", sm: "400px" },
                  borderRadius: 1,
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  fontSize: "16px",
                  "& .MuiOutlinedInput-input": {
                    color: "#667085",
                    padding: "8px 10px", // ✅ Inner padding
                  },
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              />
              <InputLabel
                htmlFor="component-simple"
                sx={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}>
                Subject*
              </InputLabel>

              <TextField
                placeholder="EX:project complain"
                fullWidth
                type="text"
                // value={formData.name}
                // onChange={handleChange}

                margin="dense"
                sx={{
                  bgcolor: "#2B2B2B",
                  width: { xs: "290px", sm: "400px" },
                  borderRadius: 1,
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  fontSize: "16px",
                  "& .MuiOutlinedInput-input": {
                    color: "#667085",
                    padding: "8px 10px", // ✅ Inner padding
                  },
                  textAlign: "center",
                  borderRadius: "8px",
                }}
              />
              <InputLabel
                htmlFor="component-simple"
                sx={{
                  color: "white",
                  fontFamily: "Nunito",
                  fontWeight: "700",
                }}>
                About
              </InputLabel>

              <TextField
                placeholder="About"
                fullWidth
                multiline
                rows={4} // Kitni lines dikhani hain
                variant="outlined"
                // value={formData.name}
                // onChange={handleChange}

                margin="dense"
                sx={{
                  bgcolor: "#2B2B2B",
                  width: { xs: "290px", sm: "400px" },
                  borderRadius: 1,
                  color: "#667085",
                  fontFamily: "Nunito",
                  fontWeight: "700",
                  fontSize: "16px",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-input": {
                    color: "#667085",
                    // padding: "", // ✅ Inner padding
                  },
                }}
              />
              <br />
            </Box>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 5,
                mb: 5,

                bgcolor: "#FFAE1B",
                color: "black",
                width: "300px",
              }}>
              Submit
            </Button>
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
export default Contact;
