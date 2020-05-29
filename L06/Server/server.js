"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
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
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control_Allow_Origin", "*");
    }
})(L06_Haushaltshilfe = exports.L06_Haushaltshilfe || (exports.L06_Haushaltshilfe = {}));
//# sourceMappingURL=server.js.map