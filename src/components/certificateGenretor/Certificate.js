import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
import saveAs from "file-saver";
import React, { useState } from "react";
import pdf from '../certificateGenretor/cert.pdf'

export default function Certificate() {
  const [name, setName] = useState('')

  async function modifyPdf(name) {
    const existingPdfBytes = await fetch(pdf).then((res) => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    firstPage.drawText(name, {
      x: 310,
      y: 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
    });
    const uri = await pdfDoc.saveAsBase64({ dataUri: true });
    saveAs(uri, "Certificate.pdf", { autoBom: true });
  }

  const handleSubmit = () => {
    if (name != "") {
      modifyPdf(name);
    } else {
      alert("Enter Student Name");
    }
  };
  return (
    <>
      <header>
        <img src="./logo.png" alt="UPLYFT" />
        <h2>Get your certificate of completing Assignment</h2>
        <h1>
          <a href="https://uplyft2.netlify.app/" target="blank">
            UPLYFT
          </a>
        </h1>
      </header>
      <main>
        <label htmlFor="name">Enter Student Name</label>
        <input type="text" name="name" id="name" placeholder="Student Name" onChange={(e)=>setName(e.target.value)}/>
        <button id="submit" onClick={handleSubmit}>
          Get Certificate
        </button>
      </main>
    </>
  );
}
