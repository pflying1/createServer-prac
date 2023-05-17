"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url_1 = require("url");
var http_1 = require("http");
var server = (0, http_1.createServer)(function (req, res) {
    var urlParse = (0, url_1.parse)(req.url);
    var urlPathName = urlParse.pathname;
    var urlMethod = req.method;
    if (urlMethod === "GET" && urlPathName === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("안녕");
        res.end();
        console.dir(res);
    }
});
server.listen(3000);
