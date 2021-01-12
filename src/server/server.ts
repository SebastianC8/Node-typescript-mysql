import express = require('express');
import path = require('path');

export default class Server {

    public app: express.Application;
    public port: number;

    constructor (port: number) {
        this.port = port;
        this.app = express();
    }

    static init  = (port: number) => new Server(port);

    start = (callback: any) => this.app.listen(this.port, callback) && this.publicFolder();

    private publicFolder = () => this.app.use(express.static(path.resolve(__dirname, '../public')));

}