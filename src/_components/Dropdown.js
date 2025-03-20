"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { IconButton } from "@mui/material";
import { green } from "@mui/material/colors";

export default function MenuListComposition({ open, setOpen }) {
  const [selectedCategory, setSelectedCategory] = React.useState("Categories"); // Default text
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event, category) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    if (category) {
      setSelectedCategory(category); // ✅ Update selected category
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          color="white"
          onClick={handleToggle}
          sx={{
            color: "white",
            textTransform: "uppercase",
            width: 195,
            // padding: "20px",
            // height: "190px",
          }}>
          {selectedCategory} {/* ✅ Show Selected Category */}
          <IconButton>
            <KeyboardArrowDownIcon
              sx={{ color: "white", margin: "0 0 0 40px" }}
            />
          </IconButton>
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
                // padding: "20px",
              }}>
              <Paper
                sx={{
                  width: 194,
                  // height: "190px",
                  bgcolor: "#272626", // ✅ Background color #ccc
                  color: "white",
                  // paddingTop: "20px",
                  zIndex: "4",

                  textTransform: "uppercase",
                }}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}>
                    <MenuItem
                      sx={{
                        borderBottom: "1px solid #ccc",
                        "&:hover": { color: "#FFAE1B" },
                        bgcolor: "#272626",
                      }}
                      onClick={(event) => handleClose(event, "Cars")}>
                      Cars
                    </MenuItem>
                    <MenuItem
                      sx={{
                        borderBottom: "1px solid #ccc",
                        "&:hover": { color: "#FFAE1B" },
                        bgcolor: "#272626",
                      }}
                      onClick={(event) => handleClose(event, "beaches")}>
                      beaches
                    </MenuItem>
                    <MenuItem
                      sx={{
                        borderBottom: "1px solid #ccc",
                        "&:hover": { color: "#FFAE1B" },
                        bgcolor: "#272626",
                      }}
                      onClick={(event) => handleClose(event, "kayaks")}>
                      kayaks
                    </MenuItem>
                    <MenuItem
                      sx={{
                        borderBottom: "1px solid #ccc",
                        "&:hover": { color: "#FFAE1B" },
                        bgcolor: "#272626",
                      }}
                      onClick={(event) => handleClose(event, "  Golf Cart")}>
                      Golf Cart
                    </MenuItem>
                    <MenuItem
                      sx={{
                        // borderBottom: "1px solid #ccc",
                        "&:hover": { color: "#FFAE1B" },
                        bgcolor: "#272626",
                        borderRadius: " 0 0  10px 10px ",
                      }}
                      onClick={(event) => handleClose(event, "Others")}>
                      Others
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
