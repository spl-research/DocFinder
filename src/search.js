const { Client } = require("@elastic/elasticsearch");
const fs = require("fs");
const path = require("path");

// Initialize Elasticsearch client
const client = new Client({ node: "http://localhost:9200" });

// Index some sample documents
async function indexDocuments() {
  try {
    try {
      // Create an index (if it doesn't exist)
      await client.indices.create({
        index: "documents",
        body: {
          mappings: {
            properties: {
              title: { type: "text" },
              content: { type: "text" },
            },
          },
        },
      });
    } catch (error) {
      console.log("index already exit");
    }

    // Read sample documents from a directory
    const documentsDir = path.join(__dirname, "files");
    console.log("path", documentsDir);
    const files = fs.readdirSync(documentsDir);
    for (const file of files) {
      const filePath = path.join(documentsDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      console.log("content", content);
      // Index each document
      await client.index({
        index: "documents",
        body: {
          title: file,
          content,
        },
      });
      console.log(`Indexed document: ${file}`);
    }

    console.log("Indexing complete.");
  } catch (error) {
    console.error("Error indexing documents:", error);
  }
}

// Search documents
async function searchDocuments(query) {
  try {
    console.log("Query:", query);
    const { body } = await client.search({
      index: "documents",
      q: query,
      _source: "title",
    });

    console.log("Search Results:");
    console.log("Body:", body);
    if (body.hits.total.value > 0) {
      body.hits.hits.forEach((hit) => {
        console.log(`- ${hit._source.title}`);
      });
    } else {
      console.log("No results found");
    }
  } catch (error) {
    console.error("Error searching documents:", error);
  }
}

// Example usage
(async () => {
  // Index sample documents
  // await indexDocuments();

  // Search for documents containing a specific term
  await searchDocuments("၄");
})();
