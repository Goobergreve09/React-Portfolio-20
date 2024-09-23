const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const apiKey = process.env.API_KEY; // Make sure to set this in Netlify's environment variables

  try {
    const response = await fetch("https://api.uptimerobot.com/v2/getMonitors", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        api_key: apiKey,
        format: "json",
        response_times: "1",
      }),
    });

    // Log the response status
    console.log("Response Status:", response.status);

    const data = await response.json(); // Get the JSON response
    console.log("Uptime Data:", data); // Log the Uptime data

    return {
      statusCode: 200,
      body: JSON.stringify(data), // Send the data as a response
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error fetching uptime data" }),
    };
  }
};
