const fs = require("fs");
const { data } = require("jquery");
const path = require("path");
const { buffer } = require("stream/consumers");

// fs.mkdir(path.join(__dirname, "templates"), (err) => {
//   if (err) throw new Error();

//   console.log("folder was created sucsessfully");
// });

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();

//   console.log("folder was created sucsessfully");
// });

fs.writeFile(
  path.join(__dirname, "notes", "december.txt"),
  "Create new course Node.js",
  (err) => {
    if (err) throw err;
    console.log("File was created successfully");

    fs.appendFile(
      path.join(__dirname, "notes", "december.txt"),
      " and microservice project",
      (err) => {
        if (err) throw err;
        console.log("File was changed successfully");

        fs.readFile(
          path.join(__dirname, "notes", "december.txt"),
          (err, data) => {
            if (err) throw err;
            console.log(Buffer.from(data).toString());
          }
        );
      }
    );
  }
);
