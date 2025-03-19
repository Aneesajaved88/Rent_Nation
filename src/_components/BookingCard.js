import React, { useState } from "react";
import { Box, Card, Typography, IconButton, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
// import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const highlightedDates = [12, 14, 18, 19]; // Highlighted available dates

const BookingCard = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  return (
    <Card
      sx={{
        width: { md: 300, lg: 400 },
        backgroundColor: "#1E1E1E",
        color: "#fff",
        borderRadius: 3,
        p: 2,
      }}>
      {/* Price & Favorite Icon */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{
            letterSpacing: "1px",
            fontFamily: "Nunito",
            fontSize: { md: "32px" },
            fontWeight: "700",
            lineHeight: "100%",
            verticalAlign: "middle",
          }}>
          $50/day
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <IconButton sx={{ color: "#fff" }}>
            <ShareOutlinedIcon />
          </IconButton>
          <IconButton sx={{ color: "#fff" }}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Location */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <LocationOnIcon sx={{ color: "#FFAE1B", fontSize: 18, mr: 0.5 }} />
        <Typography variant="body2">New York, NY</Typography>
      </Box>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: "#A9A9A9",
          mb: { md: 5, lg: 2 },
          width: { mg: "300px", lg: "370px" },
          height: "57px",
        }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra
        efficitur convallis. Mauris non hendrerit nullaLorem ipsum dolor sit
      </Typography>

      {/* Calendar */}
      <Typography variant="body2" fontWeight="bold" sx={{ mb: 2 }}>
        Available dates are highlighted
      </Typography>

      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{
          ".css-1h5ahig-MuiDateCalendar-root": {
            width: "200px !important",
          },
        }}>
        <DateCalendar
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          sx={{
            backgroundColor: "#2C2C2C",
            borderRadius: 2,
            border: "0.2px solid #fff",
            p: 1,

            ".MuiPickersDay-root": {
              color: "#fff",
              width: "200px",
            },
            ".Mui-selected": {
              backgroundColor: "#FFAE1B !important",
            },
            ".MuiPickersDay-root:not(.Mui-selected)": {
              backgroundColor: (date) =>
                highlightedDates.includes(dayjs(date).date())
                  ? "#A9A9A9"
                  : "transparent",
            },
          }}
        />
      </LocalizationProvider>

      {/* Pricing Info */}
      <Box sx={{ mt: 2, mb: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "4px 0 ",
          }}>
          <Typography variant="body2">Total Cost - $300</Typography>
          <Typography variant="body2">10%</Typography>
        </Box>
        <Typography variant="body2">Per day cost $45</Typography>
        <Typography variant="body2" sx={{ color: "#949494", fontSize: 12 }}>
          You got 10% discount because you purchase more than a week
        </Typography>
      </Box>

      {/* Request Button */}
      <Button
        fullWidth
        variant="contained"
        sx={{
          backgroundColor: "#FFAE1B",
          color: "#000",
          fontWeight: "bold",
          borderRadius: 2,
          "&:hover": { backgroundColor: "#FFA000" },
        }}>
        Make request
      </Button>
    </Card>
  );
};

export default BookingCard;
