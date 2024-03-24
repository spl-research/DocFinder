"use strict";

const { Client } = require("@elastic/elasticsearch");

const client = new Client({ node: "http://localhost:9200" });

async function run() {
  // Let's search!
  const result = await client.search({
    // index: "game-of-thrones",
    // q: "winter",
    index: "documents",
    q: "myanmar",
  });

  console.log(result.hits.hits);
}

run().catch(console.log);
