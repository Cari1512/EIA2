import * as Http from "http";
import * as URL from "url";
import * as Mongo from "mongodb";



export namespace L07 {
    //Vorlage durch Alida Kohler vom 3.6.2020, leider konnte ich keine Zeit finden mich diese Woche mit EIA zu beschäftigen, aber dies werde ich am Dienstag gemeinsam mit Alidas Hilfe nachholen; 

    interface Order {
        [type: string]: string | string[] | undefined;
    }
    let orders: Mongo.Collection;

    let port: number | string | undefined = process.env.PORT;
    if (port == undefined) {
        port = 5001;
    }

    let databaseUrl: string = "mongodb+srv://test:test@eia2-wiehx.mongodb.net/<dbname>?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {
        let server: Http.Server = Http.createServer();
        console.log(server);

        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }

    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Household").collection("Orders");
        console.log("Database connection ", orders != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {
        console.log("It works!!!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let url: URL.UrlWithParsedQuery = URL.parse(_request.url, true);
            if (_request.url == "/?getOrder=yes") {
                console.log("THIS WORKS");
                //showData(_response); 
                let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
                let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(databaseUrl, options);
                await mongoClient.connect();
                let orders: Mongo.Collection = mongoClient.db("Household").collection("Orders")
                let cursor: Mongo.Cursor<any> = await orders.find();
                await cursor.forEach(showOrders);
                let jsonString: string = JSON.stringify(allOrders);
                let answer: string = jsonString.toString();
                _response.write(answer);
                allOrders = [];
            }
            else {
                let jsonString: string = JSON.stringify((url.query), null, 2);
                _response.write(jsonString);
                storeOrder(url.query);
            }
        }

        _response.end();
    }

    let allOrders: string[] = [];
    function storeOrder(_order: Order): void {
        orders.insert(_order);
    }

    function showOrders(_item: object): void {
        //for (let entry in _item) {
        //JSON.stringify(entry);
        let jsonString: string = JSON.stringify(_item);
        allOrders.push(jsonString);
        //console.log(entry); 
        //}
    }
}

