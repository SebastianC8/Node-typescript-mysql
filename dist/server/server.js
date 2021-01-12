"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class Server {
    constructor(port) {
        this.start = (callback) => this.app.listen(this.port, callback) && this.publicFolder();
        this.publicFolder = () => this.app.use(express.static(path.resolve(__dirname, '../public')));
        this.port = port;
        this.app = express();
    }
}
exports.default = Server;
Server.init = (port) => new Server(port);
