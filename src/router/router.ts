import { Router, Request, Response } from 'express';
import MySQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

    const qry = `SELECT * FROM heroes`;

    MySQL.ejecutarQuery(qry, (err: any, heroes: Object[]) => {

        if (err) {
            res.status(400).json({ ok: true, err });
        }

        res.json({ ok: true, heroes });

    });

});

router.get('/heroes/:id', (req: Request, res: Response) => {

    const id = MySQL.instance.conn.escape(req.params.id);
    const qry = `SELECT * FROM heroes WHERE id = ${id}`;

    MySQL.ejecutarQuery(qry, (err: any, heroe: Object[]) => {

        if (err) {
            res.status(400).json({ ok: true, err });
        }

        res.json({ ok: true, heroe });
    });

});

export default router;