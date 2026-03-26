import http from "node:http";
import fs from "node:fs";

const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
  if (req.url === "/") {
    fs.readFile("pages/index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else if (req.url === "/ChiSiamo") {
    fs.readFile("pages/ChiSiamo.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else if (req.url === "/contatti") {
    fs.readFile("pages/contatti.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  } else {
    fs.readFile("pages/404.html", (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(data);
    });
  }
});

server.listen(3000, () => {
  console.log("Server in ascolto su http:localhost:3000");
});
