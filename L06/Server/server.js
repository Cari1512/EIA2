"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const URL = require("url");
var L06_Haushaltshilfe;
(function (L06_Haushaltshilfe) {
    let server = Http.createServer();
    console.log(server);
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    console.log("Server starting on port:" + port);
    server.listen(port);
    server.addListener("request", handleRequest);
    function handleRequest(_request, _response) {
        console.log("It works!!!");
        if (_request.url) {
            let url = URL.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write(jsonString);
        }
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write("This is my response");
        _response.end();
    }
})(L06_Haushaltshilfe = exports.L06_Haushaltshilfe || (exports.L06_Haushaltshilfe = {}));
//# sourceMappingURL=server.js.map