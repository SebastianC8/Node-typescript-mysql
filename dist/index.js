"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("./mysql/mysql"));
const router_1 = __importDefault(require("./router/router"));
const server_1 = __importDefault(require("./server/server"));
const server = server_1.default.init(3000);
const mysql = new mysql_1.default();
server.app.use(router_1.default);
server.start(() => {
    console.log('Servidor corriendo en puerto 3000');
});
