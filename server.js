const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const upload_folder = "tmp";
app.use(express.static("public"));

app.use(bodyParser.json());
app.use("/uploaded", express.static(upload_folder));


// Upload post route
app.post("/upload", (req, res) => {
  const { html } = req.body;

  let id = "fridge"

  fs.writeFile(`${upload_folder}/${id}.html`, html, err =>
    console.log(err)
  );

  res.json({ id: id });
  console.log("saved " + id);
});

// Server listener
app.listen(process.env.PORT);
console.log("Your app is listening on port " + process.env.PORT);
