import express from 'express'
import bodyParser from 'body-parser'

export default class Server{
    
    public app:express.Application;
    public port:number;

    constructor(port: number){
        this.port = port;
        this.app = express()
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
    }

    static init(port:number){
        return new Server(port);
    }

    start( callback:() => void ){
        this.app.listen(this.port,callback);               
    }    
}