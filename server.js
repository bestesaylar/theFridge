const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* CONFIG */
const accepted_extensions = ["jpg", "png", "gif"];
const upload_folder = "tmp";

app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/uploaded", express.static(upload_folder));

// Upload post route
app.post("/upload", (req, res) => {
  const { title, image } = req.body;

  let id = Math.random()
    .toFixed(8)
    .toString()
    .slice(2);
  var base64Data = image.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(`tmp/${id}.png`, base64Data, "base64", function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.sendStatus(200).json({ id: id });
});

// Server listener
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
