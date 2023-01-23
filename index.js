const express = require("express");

const app = express();
const PORT = 5000;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server is started on ", PORT);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
