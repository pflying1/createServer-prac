import { parse } from "url";
import { createServer } from "http";

const server = createServer((req, res) => {
  const parseUrl = parse(req.url);
  const pathName = parseUrl.pathname;
  const method = req.method;

  if (method === "GET" && pathName === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("hi");
    res.end();
    console.dir(res);
  }
});
server.listen(3000, (err) => {
  if (err) {
    console.error("err");
  } else {
    console.log("돌아감");
  }
});
