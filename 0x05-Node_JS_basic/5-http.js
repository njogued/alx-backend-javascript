const http = require("http");
const fs = require("fs");

const PORT = 1245;
const HOST = "localhost";
const DB_FILE = process.argv.length > 2 ? process.argv[2] : "";

const app = http.createServer((req, res) => {
  if (req.method === "GET") {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello Holberton School\n");
    } else if (req.url === "/students") {
      fs.readFile(DB_FILE, "utf-8", (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Internal Server Error\n");
          return;
        }
        const lines = data.split("\n").filter((line) => line.trim() !== "");
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("This is the list of our students:\n");
        lines.forEach((line) => {
          res.write(line + "\n");
        });
        res.end();
      });
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed\n");
  }
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`);
});

module.exports = app;
