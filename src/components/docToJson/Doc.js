import React, { useState } from "react";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";

import Card from "@mui/material/Card";
import { Box, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Sidenav from "../Sidenav";

export default function Doc() {
  const [jsonData, setJsonData] = useState("");

  const handleFileChange = (event) => {
    const myDocxFile = event.target.files[0];

    if (myDocxFile) {
      const reader = new FileReader();

      reader.onload = async (event) => {
        const buffer = event.target.result;
        const zip = new PizZip();
        zip.load(buffer);
        const doc = new Docxtemplater().loadZip(zip);
        const data = doc.getFullText();
        setJsonData(JSON.stringify(data, null, 2));
        console.log()
      };

      reader.readAsArrayBuffer(myDocxFile);
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flex: 1, p: 1 }}>
        <Grid container spacing={7}>
          <Grid xs={12} md={6}>
            <Box height={120} />
            <h1>For Doc File</h1>

            <Card>
              <CardContent xs={8}>
                <div>
                  <input
                    type="file"
                    accept=".doc,.docx"
                    onChange={handleFileChange}
                  />
                  {jsonData && <p>{jsonData}</p>}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  
  );
}
