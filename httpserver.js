const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1> This is Code with Kd</h1><p>This is a sample code</p>");
});

server.listen(port, () => console.log(`Server is listening on port ${port}`));
