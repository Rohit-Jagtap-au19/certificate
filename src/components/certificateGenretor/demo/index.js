const genratePDF = async (name) => {
  const { PDFDocument, rgb } = PDFLib;

  const exBytes = await fetch("/cert.pdf").then((res) => {
    return res.arrayBuffer();
  });

  const exFont = await fetch("./Roboto-Bold.ttf").then((res) => {
    return res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(exBytes);

  pdfDoc.registerFontkit(fontkit);
  const myFont = await pdfDoc.embedFont(exFont);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  firstPage.drawText(name, {
    x: 310,
    y: 310,
    size: 38,
    font: myFont,
    color: rgb(0.2, 0.84, 0.67),
  });

  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(uri, "Certificate.pdf", { autoBom: true });
};
const submitBtn = document.getElementById("submit");
const inputValue = document.querySelector("#name");

submitBtn.addEventListener("click", () => {
  const val = inputValue.value;
  if (val != "") {
    genratePDF(val);
  } else {
    alert("Enter Student Name");
  }
});
