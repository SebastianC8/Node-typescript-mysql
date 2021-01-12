import MySQL from "./mysql/mysql";
import router from "./router/router";
import Server from "./server/server";

const server = Server.init(3000);
const mysql = new MySQL();

server.app.use(router);
server.start(() => {
    console.log('Servidor corriendo en puerto 3000');
});

