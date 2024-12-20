"use client";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export default function About() {
  return (
    <Grid
      container
      sx={{
        paddingY: { xs: 5, md: 5 },
        paddingX: { xs: 2, sm: 4, md: 10 },
        marginTop: 5,
      }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h5"
          sx={{
            color: "#EE484A",
            fontSize: { xs: "20px", sm: "25px", md: "32px" },
            fontFamily: "Helvetica",
            fontWeight: 400,
          }}
        >
          About Us
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "#3D628C",
            fontSize: { xs: "15px", sm: "20px", md: "25px", lg: "40px", xl: "48px" },
            fontWeight: 700,
            fontFamily: "Helvetica",
            marginTop: 3,
            width: "100%",
          }}
        >
          We specialise in importing medical products to Africa and exporting
          organic treasures like coffee and spices globally.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "flex-end", // Ensures all children are aligned to the right
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#616161",
              fontFamily: "Roboto",
              fontSize: { xs: 15, sm: 20, md: 25, lg: 25 },
              fontWeight: 300,
              textAlign: "left", // Align text to the right
              marginTop: 2,
              width: { xs: "100%", md: "80%" }, // Ensures it takes full width for alignment
            }}
          >
            We are a team of young professionals with five years of experience
            successfully importing medical products from Europe (Germany and
            Belgium), China, and India to Africa.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowOutward />}
            sx={{
              boxShadow: "none",
              fontFamily: "Roboto",
              fontWeight: 400,
              fontSize: { xs: "15px", md: "20px" },
              color: "black",
              background: "white",
              width: 170,
              height: 50,
              borderRadius: "20px",
              border: "solid 1px #9E9E9E",
              alignSelf: "flex-end", // Aligns button to the right
            }}
          >
            About Us
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
