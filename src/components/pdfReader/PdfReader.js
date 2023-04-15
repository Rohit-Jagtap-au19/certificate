import React from 'react'
import { Box, Button, Grid } from "@mui/material";


export default function PdfReader() {
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
          <input type='file' style={{width:'400px',marginBottom:'10px'}}/>
          <Button variant="contained">Submit</Button>
        </Grid>
      </Grid>
    </Box>
  )
}
