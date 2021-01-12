import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL;
    conn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('Clase inicializada');
        this.conn = mysql.createConnection({ host: 'localhost', user: 'node_user', password: '123456', database: 'node_db' });
        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: any) {

        this.instance.conn.query(query, (err, results: Object[], fields: any) => {

            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }

            if (results.length === 0) {
                callback('La consulta no arrojó resultados.');
            }
            
            callback(null, results);

        });
    }

    private conectarDB() {

        this.conn.connect((err: mysql.MysqlError) => {

            if (err) {
                console.log(err.message);
                return;
            }

            this.conectado = true;
            console.log('Conexión correcta a BD.');
        });

    }

}