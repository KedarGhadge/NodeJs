const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (req.url == "/") {
    res.statusCode = 200;
    res.end("<h1> This is Code with Kd</h1><p>This is a sample code</p>");
  } else if (req.url == "/home") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1>This is About me</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>404: Page Not Found</h1>");
  }
});

server.listen(port, () => console.log(`Server is listening on port ${port}`));
