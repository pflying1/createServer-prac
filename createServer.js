"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var http_1 = require("http");
var server = (0, http_1.createServer)(function (req, res) {
    var parseUrl = (0, url_1.parse)(req.url);
    var pathName = parseUrl.pathname;
    var method = req.method;
    if (method === "GET" && pathName === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("hi");
        res.end();
        console.dir(res);
    }
});
server.listen(3000, function (err) {
    if (err) {
        console.error("err");
    }
    else {
        console.log("돌아감");
    }
});
