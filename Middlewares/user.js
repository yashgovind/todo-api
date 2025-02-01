const fs = require("fs");

let date = new Date();
date = date.getSeconds;

function logMethod(filepath,req,res) {
  return fs.appendFile(
    filepath,
    console.log(`request : ${req.method} at :${date}`),
    (err, data) => {
      next();
    }
  );
}

module.exports = {
    logMethod,
 };
