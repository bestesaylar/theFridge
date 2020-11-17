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

// get list of posts
app.get("/posts", (req, res) => {
  fs.promises.readdir(upload_folder).then(files => {
    res.send(JSON.stringify(files));
  });
});

// Upload post route
app.post("/upload", (req, res) => {
  const { title, image } = req.body;

  let id = Math.random()
    .toFixed(8)
    .toString()
    .slice(2);
  var base64Data = image.replace(/^data:image\/png;base64,/, "");

  fs.writeFile(`${upload_folder}/${id}.png`, base64Data, "base64", function(
    err
  ) {
    if (err) {
      console.log(err);
    }
  });
  res.json({ id: id });
  console.log("saved " + id);
});

// Server listener
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
