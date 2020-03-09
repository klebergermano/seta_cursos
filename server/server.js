const express = require("express");
const bodyParser = require("body-parser");
const pdf = require("html-pdf");
const cors = require("cors");
const path = require("path");

const pdfTemplate = require("../documents");

const apiRouter = require("./routes.js");

const app = express();

app.use(express.json());
app.use("/", apiRouter);

const port = 5000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server running on ${process.env.PORT || port}`);
});

//---------------------------------------------------------PDF CREATOR

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/create-pdf", (req, res) => {
  pdf.create(pdfTemplate(req.body), {}).toFile("./server/result.pdf", err => {
    if (err) {
      res.send(Promise.reject());
    }

    res.send(Promise.resolve());
  });
});

app.get("/fetch-pdf", (req, res) => {
  res.sendFile(`${__dirname}/result.pdf`);
});
//---------------------------------------------------------------------
process.on("uncaughtException", function(err) {
  console.log(err);
});
