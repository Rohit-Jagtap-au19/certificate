import React, { useState } from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import saveAs from "file-saver";

import Card from "@mui/material/Card";
import { Box, Button, Grid } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import pdf from "../certificateGenretor/certificate.pdf";
import logo from "../certificateGenretor/logo.png";
import Sidenav from "../Sidenav";

export default function Certificate() {
  const [name, setName] = useState("");
  const [program, setProgram] = useState("");
  const [company, setCompany] = useState("");

  const [ref, setRef] = useState("");
  const [date, setDate] = useState("");
  const [todate, setTodate] = useState("");

  async function modifyPdf(name, company, program, date, todate, ref) {
    const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    firstPage.drawText(name, {
      x: 70,
      y: 280,
      size: 45,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(company, {
      x: 152,
      y: 233,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(program, {
      x: 328,
      y: 253,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(ref, {
      x: 725,
      y: 25,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });

    firstPage.drawText(date, {
      x: 110,
      y: 210,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    firstPage.drawText(todate, {
      x: 215,
      y: 210,
      size: 16,
      font: helveticaFont,
      color: rgb(0, 0, 0),
    });
    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    saveAs(uri, "Certificate.pdf", { autoBom: true });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((name && company && program && date && todate && ref !== "")) {
      modifyPdf(name, company, program, date, todate, ref);

      // const valid = ["A+","A","B+","B","C+","C"]
      // if (valid.includes(grade)) {
      //   modifyPdf(name, course, grade, date);

      //   // console.log(grade,"this is working");
      // }
      // else{
      //   alert("This is not valid Grade")
      // }
    } else {
      alert("Enter Student Details");
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Sidenav />
      <Box component="main" sx={{ flex: 1, p: 1 }}>
        <Grid container spacing={6}>
          <Grid xs={12} md={6}>
            <Box height={120} />
            <Card>
              <CardContent xs={12}>
                <header>
                  <img
                    src={logo}
                    style={{ height: "200px", width: "200px" }}
                    alt="UPLYFT"
                  />
                  <h2>Get your certificate of completing Assignment</h2>
                  <h1>
                    <a href="https://uplyft2.netlify.app/" target="blank">
                      UPLYFT
                    </a>
                  </h1>
                </header>

                <main
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <label
                    htmlFor="name"
                    style={{
                      fontWeight: "bold",
                      fontSize: "30px",
                    }}
                  >
                    Enter Student Details
                  </label>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* for Student Name */}
                    <input
                      type="text"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontSize: "20px",
                        width: "45%",
                      }}
                      placeholder="Student Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {/* For company Name */}
                    <input
                      type="text"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontSize: "20px",
                        width: "45%",
                      }}
                      placeholder="company Name"
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* Program Name */}
                    <input
                      type="text"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontSize: "20px",
                        width: "45%",
                      }}
                      placeholder="Program Name"
                      onChange={(e) => setProgram(e.target.value)}
                    />
                    {/* For ref Id */}
                    <input
                      type="text"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontSize: "20px",
                        width: "45%",
                      }}
                      placeholder="Ref ID"
                      onChange={(e) => setRef(e.target.value)}
                    />
                  </div>
                  <div
                    className="Date"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <small>from</small>
                    <input
                      type="date"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontSize: "20px",
                        width: "45%",
                      }}
                      placeholder="Selct Date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                    <small>To</small>

                    <input
                      type="date"
                      style={{
                        border: "none",
                        borderBottom: "1px solid black",
                        fontSize: "20px",
                        width: "45%",
                      }}
                      placeholder="Selct Date"
                      onChange={(e) => setTodate(e.target.value)}
                    />
                  </div>

                  <Button
                    id="submit"
                    variant="contained"
                    onClick={handleSubmit}
                  >
                    Get Certificate
                  </Button>
                </main>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
