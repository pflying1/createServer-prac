import { parse } from "url";
import { createServer } from "http";

const server = createServer((req, res) => {
  const urlParse = parse(req.url);
  const urlPathName = urlParse.pathname;
  const urlMethod = req.method;

  if (urlMethod === "GET" && urlPathName === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("안녕");
    res.end();
    console.dir(res);
  }
});
server.listen(3000);
