import { createServer } from 'http';
import { readFile } from 'fs/promises';

const host = 'localhost';
const port = 8080;

const requestListener = (req, res) => {
  res.setHeader("Content-Type", "text/html");
  switch (req.url) {
    case "/":
      readFile('index.html')
        .then(contents => {
          res.writeHead(200);
          res.end(contents);
        })
        .catch(err => {
          res.writeHead(500);
          res.end(err);
          return;
        });
        break
    case "/about":
      readFile('about.html')
        .then(contents => {
          res.writeHead(200);
          res.end(contents);
        })
        .catch(err => {
          res.writeHead(500);
          res.end(err);
          return;
        });
        break
    case "/contact-me":
      readFile("contact-me.html")
        .then(contents => {
          res.writeHead(200);
          res.end(contents);
        })
        .catch(err => {
          res.writeHead(500);
          res.end(err);
          return;
        });
        break
    default:
      readFile("404.html")
        .then(contents => {
          res.writeHead(200);
          res.end(contents);
        })
        .catch(err => {
          res.writeHead(500);
          res.end(err);
          return;
        });
  }
};

const server = createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is responding on http://${host}:${port}`);
});
