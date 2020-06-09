"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L07 = void 0;
const Http = require("http");
const URL = require("url");
const Mongo = require("mongodb");
var L07;
(function (L07) {
    //Vorlage durch Alida Kohler vom 3.6.2020, leider konnte ich keine Zeit finden mich diese Woche mit EIA zu beschäftigen, aber dies werde ich am Dienstag gemeinsam mit Alidas Hilfe nachholen; 
    let orders;
    let port = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }
    let databaseUrl = "mongodb+srv://test:test@eia2-wiehx.mongodb.net/<dbname>?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log(server);
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Household").collection("Orders");
        console.log("Database connection ", orders != undefined);
    }
    async function handleRequest(_request, _response) {
        console.log("It works!!!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = URL.parse(_request.url, true);
            if (_request.url == "/?getOrder=yes") {
                console.log("THIS WORKS");
                //showData(_response); 
                let options = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient = new Mongo.MongoClient(databaseUrl, options);
                await mongoClient.connect();
                let orders = mongoClient.db("Household").collection("Orders");
                let cursor = await orders.find();
                await cursor.forEach(showOrders);
                let jsonString = JSON.stringify(allOrders);
                let answer = jsonString.toString();
                _response.write(answer);
                allOrders = [];
            }
            else {
                let jsonString = JSON.stringify((url.query), null, 2);
                _response.write(jsonString);
                storeOrder(url.query);
            }
        }
        _response.end();
    }
    let allOrders = [];
    function storeOrder(_order) {
        orders.insert(_order);
    }
    function showOrders(_item) {
        //for (let entry in _item) {
        //JSON.stringify(entry);
        let jsonString = JSON.stringify(_item);
        allOrders.push(jsonString);
        //console.log(entry); 
        //}
    }
})(L07 = exports.L07 || (exports.L07 = {}));
//# sourceMappingURL=server.js.map