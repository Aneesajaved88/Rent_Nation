"use client";

export const Button = () => {
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
    </>
  );
};

//
