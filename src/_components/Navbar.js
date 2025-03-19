import { useState, useRef, useEffect } from "react";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Listings", path: "/listing" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contant" },
];

const useOutsideClick = (callback) => {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
const Navbar = ({ setIsopen, isOpen }) => {
  const pathname = usePathname();

  const menuRef = useOutsideClick(() => setIsopen(false));

  function handleClick() {
    setIsopen((p) => !p);
  }

  // function handleChange(e) {
  //   setInputValue(e.target.value);
  //   console.log(e.target.value);
  // }
  return (
    <>
      <Box
        component="header"
        sx={{
          bgcolor: isOpen === true ? "green" : "",
          maxWidth: "1400px",
          background: "transparent",
          width: { lg: "100vw", xl: "100vw" },

          padding: { xs: "20px", sm: "30px", lg: " 30px 40px" },
        }}>
        <Box
          sx={{
            width: "100%",
            display: { xs: "block", sm: "flex" },
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: {
              xs: "center",
              sm: "space-between",
              lg: "space-between",
            },
            alignItems: "center",
            gap: { xs: "20px" },
          }}>
          {/* logo */}
          <Box
            component="img"
            src="./pngs/logo.png"
            sx={{
              width: { sm: "90px", lg: "150px" },
              height: {
                xs: " 30px",
                sm: "30px",
                lg: "40px",
              },
            }}></Box>
          {/* li butn */}
          <Box
            sx={{
              width: { sm: "500px", lg: "600px" },
              display: "flex",
              justifyContent: { sm: "flex-end", lg: "space-evenly" },
              alignItems: "center",
              gap: "20px",
            }}>
            {/* ul li */}
            <Box
              sx={{
                display: "none",
                color: "white",
                width: { sm: "200", lg: "400px" },
                gap: { sm: "15px" },
                justifyContent: "space-evenly",
                alignItems: "center",
                display: { xs: "none", sm: "flex" },
                fontFamily: "Nunito",
                lineHeight: "22px",
                letterSpacing: "0%",
                textTransform: "uppercase",
              }}>
              {navItems.map((items) => {
                return (
                  <>
                    <Typography
                      key={items.path}
                      sx={{
                        fontSize: { xs: "10px", sm: "12px", lg: "14px" },
                        fontWeight: { xs: "100", sm: "200", lg: "400" },
                      }}>
                      <Link
                        className={`nav ${
                          pathname === items.path ? "active" : ""
                        }`}
                        href={items.path}
                        style={{
                          listStyle: "none",
                          border: "none !important",
                          color: "white",
                          outline: "none !important",
                          textDecoration: "none",
                        }}>
                        {items.label}
                      </Link>
                    </Typography>
                  </>
                );
              })}
            </Box>
            {/* login bn */}
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}>
              <Button
                variant="contained"
                color="green"
                sx={{
                  color: "black",
                  width: { xs: "120px", sm: "110px", lg: "170px " },
                  height: { xs: "50px", sm: "35px", lg: "42px " },
                  fontSize: { xs: "10px", sm: "8px", lg: "14px" },
                  fontWeight: { xs: "200", sm: "200", lg: "400" },
                  bgcolor: "#FFAE1B",
                  borderRadius: "4px",
                  // padding: { xs: "1px", sm: "8px", lg: "20px " },
                }}>
                Log in / Sign Up
              </Button>
            </Box>
            {/* btn */}
            <Box
              sx={{
                display: { sm: "none" },
                position: "absolute",
                right: "10px",
                top: "10px",
                zIndex: "599",
              }}>
              <IconButton sx={{ color: "white" }} onClick={handleClick}>
                {!isOpen ? <DensityMediumIcon /> : <CloseIcon />}
              </IconButton>
            </Box>
            {/* ====== humbargr */}

            <Box
              ref={menuRef}
              sx={{
                display: isOpen ? "block" : "none",
                borderRadius: "12px 0 0 12px ",
                position: "absolute",
                top: "0",
                right: "0",
                height: "100vh",
                width: "80vw",
                bgcolor: "rgba(0,0,0,0.88)",
                // bgcolor: "green",
                zIndex: "29",
              }}>
              <Box sx={{}}></Box>
              <Box
                sx={{
                  color: "white",
                  position: "absolute",
                  top: "100px",
                  right: "20px",
                  display: { xs: "flex", sm: "none" },
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: { xs: "80px", sm: "15px" },
                  padding: "22px",
                  fontFamily: "Nunito",
                  textTransform: "uppercase",
                }}>
                {navItems.map((items) => {
                  return (
                    <>
                      <Typography
                        key={items.path}
                        sx={{
                          fontSize: { xs: "14px", sm: "12px", lg: "14px" },
                          fontWeight: { xs: "100", sm: "200", lg: "400" },
                        }}>
                        <Link
                          className={`nav ${
                            pathname === items.path ? "active" : ""
                          }`}
                          href={items.path}
                          style={{
                            listStyle: "none",
                            border: "none !important",
                            color: "white",
                            outline: "none !important",
                            textDecoration: "none",
                          }}>
                          {items.label}
                        </Link>
                      </Typography>
                    </>
                  );
                })}

                <Box>
                  <Button
                    variant="contained"
                    // color="green"
                    sx={{
                      color: "black",

                      width: { xs: "120px", sm: "110px", lg: "170px " },
                      height: { xs: "30px", sm: "35px", lg: "42px " },
                      fontSize: { xs: "10px", sm: "8px", lg: "14px" },
                      fontWeight: { xs: "200", lg: "400" },
                      bgcolor: "#FFAE1B",
                      borderRadius: "4px",
                      // padding: { xs: "1px", sm: "8px", lg: "20px " },
                    }}>
                    Log in / Sign Up
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
