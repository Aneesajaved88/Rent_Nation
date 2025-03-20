"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import BasicRating from "./Ratingtab";
import { Typography } from "@mui/material";
import LinearProgressDeterminate from "./ListingProg";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsLink = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: { xs: "300px", sm: "590px", md: "500px", lg: "755px" },
        display: { xs: "flex", md: "block", lg: "block" },
        flexDirection: "column",
        justifyContent: { xs: "center", md: "flex-start" },
        alignItems: { xs: "center", md: "flex-start" },
      }}>
      <Box
        sx={{
          borderBottom: 1,
          width: { xs: "300px", lg: "400px" },
          borderColor: "#fff",
          color: "#fff",
        }}>
        <Tabs
          // width=""
          value={value}
          onChange={handleChange}
          textColor="#FFAE1B"
          indicatorColor="#FFAE1B"
          aria-label="basic tabs example">
          <Tab
            label="Description"
            {...a11yProps(0)}
            sx={{
              color: "#fff",
              "&.Mui-selected": {
                color: "#FFAE1B", // Active tab color
                borderBottom: "2px solid #FF8E1B", // Custom bottom border
              },
              "&:hover": {
                color: "#FFAE1B", // Hover effect
              },
            }}
          />
          <Tab
            label="Reviews"
            {...a11yProps(1)}
            sx={{
              color: "#fff",
              "&.Mui-selected": {
                color: "#FFAE1B", // Active tab color
                borderBottom: "2px solid #FF8E1B", // Custom bottom border
              },
              "&:hover": {
                color: "#FFAE1B", // Hover effect
              },
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Typography
          sx={{
            fontFamily: "Nunito",
            fontSize: { xs: "12px", sm: "14px" },
            textAlign: { xs: "justify", sm: "left" },
            fontWeight: "400",
            lineHeight: "19px",
            letterSpacing: "0%",
            padding: "20px 0",
            verticalAlign: "middle",
            color: "#ccc",
          }}>
          The beach is a stunning natural landscape where the land gently meets
          the vast expanse of the sea. It is a place of serene beauty, offering
          a unique blend of soothing elements and exhilarating experiences. A
          typical beach scene presents a picturesque combination of sand, water,
          and sky, forming a harmonious symphony of colors, textures, and
          sounds.
          <br />
          <br />
          As you step onto the beach, your feet sink into the soft, warm sand,
          its fine grains gently caressing your skin. The sand stretches out
          before you, creating a vast shoreline that invites you to explore its
          inviting expanse. The beach is a place where people come to unwind,
          bask in the sun, and engage in a multitude of activities.
          <br />
          <br />
          Looking out towards the sea, you witness a mesmerizing panorama of
          shimmering blue waters that extend to the horizon. Waves crash against
          the shore, producing a rhythmic melody that soothes the senses. The
          salty breeze carries a refreshing aroma, filling the air with a hint
          of adventure and tranquility.
        </Typography>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box
          sx={{
            width: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            // gap: { md: "20px" },
          }}>
          <BasicRating />
          <Typography
            sx={{
              letterSpacing: "1px",
              fontFamily: "Nunito",
              fontSize: { md: "14px" },
              fontWeight: "400",
              lineHeight: "100%",
              marginLeft: "8px",

              color: "#A9A9A9",
              padding: { md: "20px" },
            }}>
            based on 60 reviews
          </Typography>
          <LinearProgressDeterminate />
        </Box>
      </CustomTabPanel>
    </Box>
  );
};

export default TabsLink;
