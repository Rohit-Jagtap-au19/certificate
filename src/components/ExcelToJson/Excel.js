import React, { useState } from "react";
import * as XLSX from "xlsx";
import Card from "@mui/material/Card";
import { Box, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import Sidenav from "../Sidenav";

export default function Excel() {
  const [jsonData, setJsonData] = useState(null);

  function handleExcelFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });
      const jsonData = XLSX.utils.sheet_to_json(
        workbook.Sheets[workbook.SheetNames[0]]
      );
      setJsonData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flex: 1, p: 1 }}>
        <Grid container spacing={7}>
          <Grid xs={12} md={6}>
            <Box height={120} />
              <h1>For Excel File</h1>
            <Card >
              <CardContent >
              <div>
                  <input
                    type="file"
                    accept=".xls,.xlsx"
                    onChange={handleExcelFile}
                  />
                  {jsonData && <pre>{JSON.stringify(jsonData, null, 2)}</pre>}
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
