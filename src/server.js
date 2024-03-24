const express = require("express");
const { Client } = require("@elastic/elasticsearch");

const app = express();
const port = 3000;

const client = new Client({ node: "http://localhost:9200" }); // Elasticsearch connection

app.get("/ping", async (req, res) => {
  try {
    // Test connection to Elasticsearch
    await client.ping();
    res.json("Connected to Elasticsearch");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error connecting to Elasticsearch", error });
  }
});

app.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const result = await client.search({
      index: "documents",
      q: q,
      _source: ["file", "meta"],
    });

    if (result?.hits?.hits?.length > 0) {
      // Check if hits are present and send them in the response
      res.json(result?.hits?.hits || []);
    } else {
      // Log error and send 404 response if no hits are found
      res.status(404).json({ message: "No hits found" });
    }
  } catch (error) {
    console.error("Elasticsearch query failed:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
