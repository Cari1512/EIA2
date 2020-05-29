import * as Http from "http";



export namespace L06_Haushaltshilfe {
    let server: Http.Server = Http.createServer();
    console.log(server);

    let port:number |string | undefined = process.env.PORT;
    if (port == undefined)
        port = 5001;

        console.log("Server starting on port:" + port );
     server.listen(port);
     server.addListener("request", handleRequest);

     function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse) : void {
         console.log("It works!!!");

          _response.setHeader("content-type", "text/html; charset=utf-8");
          _response.setHeader("Access-Control_Allow_Origin", "*");
     }
}