const express = require("express");

const app = express();
app.use(express.json());
const PORT = 5000;

app.get("/", async (req, res) => {
  res.json({
    message: "Hello world",
  });
});

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
