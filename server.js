const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";

const port = process.env.PORT || 8089 ; // Change the port to the port that your IIS is running on. Default its 80 and 3000 if you are using it for developing.
const hostname = "localhost";
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === "/a") {
        await app.render(req, res, "/a", query);
      } else if (pathname === "/b") {
        await app.render(req, res, "/b", query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  })
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, async (err) => {
      if(err) throw err
      console.log(`> Ready on http://localhost:${port}`);
    });
});
// const http = require('http');
// const next = require('next');

// const dev = process.env.NODE_ENV !== 'production';
// const app = next({ dev });
// const handle = app.getRequestHandler();

// // پورت‌های مورد نظر
// const ports = [3000, 443]; // می‌توانید پورت‌های دیگری اضافه کنید

// app.prepare().then(() => {
//   ports.forEach((port) => {
//     const server = http.createServer((req, res) => {
//       handle(req, res); // مدیریت تمام درخواست‌ها توسط Next.js
//     });

//     server.listen(port, (err) => {
//       if (err) throw err;
//       console.log(`> Server ready on http://localhost:${port}`);
//     });
//   });
// });
