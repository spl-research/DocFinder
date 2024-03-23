const fs = require("fs");
const path = require("path");
const { readPdfText } = require("pdf-text-reader");

async function getContent(filePath) {
  const ext = path.extname(filePath);
  console.log("ext", ext);
  if (ext === ".pdf") {
    return await readPdf(filePath);
  } else {
    return await readTxt(filePath);
  }
}

function readTxt(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    return content;
  } catch (error) {
    return null;
  }
}

// Function to extract text from PDF file
async function readPdf(filePath) {
  try {
    let text = await readPdfText({ url: filePath });
    text = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    // // Read the PDF file
    // const dataBuffer = fs.readFileSync(filePath);
    // // var text = Buffer.from(dataBuffer, "utf-8").toString();
    // // Parse the PDF data
    // const pdfData = await PDFParser(dataBuffer);

    // // Extract text content from the parsed PDF data
    // const text = pdfData.text;

    return text;
  } catch (error) {
    console.error("Error extracting text from PDF:", error);
    return null;
  }
}

function readFile(filePath) {
  try {
    const data = new Uint8Array(fs.readFileSync(filePath));
    // const content = new TextDecoder().decode(data);
    const content = Buffer.from(data.buffer).toString();
    return content;
  } catch (error) {
    return null;
  }
}

module.exports = {
  getContent,
  readTxt,
  readPdf,
  readFile,
};
