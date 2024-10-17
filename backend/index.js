const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());

const PORT = 3000;

app.get("/data", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.althire.ai/assignment/fullstack01"
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data from Althire API:", error.message);
    res.status(500).json({ message: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});