import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/api/uptime", async (req, res) => {
  try {
    const response = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        api_key: process.env.API_KEY, // Use your main API key
        format: "json",
        response_times: "1",
      }),
    });

    // Log the response status
    console.log("Response Status:", response.status);

    const data = await response.json(); // Get the JSON response
    console.log("Uptime Data:", data); // Log the Uptime data

    res.json(data); // Send the data as a response
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Error fetching uptime data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
