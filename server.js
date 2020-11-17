const fs = require("fs");
const express = require("express");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const fileType = require("file-type");
const bodyParser = require('body-parser')
import { v4 as uuidv4 } from 'uuid';

const app = express();

/* CONFIG */
const accepted_extensions = ["jpg", "png", "gif"];
const upload_folder = "tmp";

app.use(express.static("public"));
app.use(bodyParser());
app.use("/uploaded", express.static(upload_folder));
app.use(
  fileUpload({
    createParentPath: true
  })
);

// const upload = multer({
//   limits: {
//     fileSize: 5 * 1024 * 1024, // 5 MB upload limit
//     files: 1 // 1 file
//   },
//   fileFilter: (req, file, cb) => {
//     // if the file extension is in our accepted list
//     if (
//       accepted_extensions.some(ext => file.originalname.endsWith("." + ext))
//     ) {
//       return cb(null, true);
//     }

//     // otherwise, return error
//     return cb(
//       new Error(
//         "Only " + accepted_extensions.join(", ") + " files are allowed!"
//       )
//     );
//   }
// });

// Upload post route
app.post(
  "/upload",
  (req, res, next) => {
    // console.log(req);
    const { title, image } = req.body;

    let id = 
    var base64Data = image.replace(/^data:image\/png;base64,/, "");

    fs.writeFile("tmp/out.png", base64Data, "base64", function(err) {
      console.log(err);
    });

      res.sendStatus(200).json({ id: "already exists" });

  }
);

// Server listener
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
