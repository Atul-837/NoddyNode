const http = require("http");
const { addListener } = require("process");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to homepage");
  }
  if (req.url === "/about") {
    res.end("About page hai yeh");
  } else {
    res.end(`
    <h1>Ruk jaa bhai!!!!!!!!! kya kr rha hai tu</h1>`);
  }
});

server.listen(5000);
