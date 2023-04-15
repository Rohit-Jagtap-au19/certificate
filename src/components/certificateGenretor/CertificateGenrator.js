import React from "react";
import { Box, Button, Grid } from "@mui/material";

export default function CertificateGenrator() {
  return (
    <Box sx={{ width: "100%" }}>
      <Box height={20} />
      <Grid
        container
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 2 }}
        // style={{ padding: "2% 10%" }}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            placeholder="Enter Student Name"
            style={{
              width: "300px",
              marginBottom: "10px",
              border: "none",
              borderBottom: "1px solid black",
              padding:'10px',
              fontSize:'20px'
            }}
          />
          <Button variant="contained">Get Certificate</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
